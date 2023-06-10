// import React, { useState, useEffect } from "react";
// import petsData from "../petsData";
import { useParams } from "react-router-dom";
import { putPet, deletePet, getById } from "../api/pets";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
const PetDetail = () => {
  const { petId } = useParams();

  const queryClient = useQueryClient();
  const { data: pet, isLoading } = useQuery({
    queryKey: ["pet"],
    queryFn: () => getById(petId),
  });
  const { mutate: deleteP } = useMutation({
    mutationFn: () => deletePet(petId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
  });
  const handleDelete = () => {
    deleteP();
    // deletePet(pet.id);
  };
  const { mutate: adoptP } = useMutation({
    mutationFn: () => putPet(pet.id, pet.name, pet.type, pet.image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
  });

  const handleAdopt = () => {
    adoptP();
  };

  if (isLoading) return <h1> loading ... </h1>;

  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={handleAdopt}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            Adobt
          </button>

          <button
            onClick={handleDelete}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
// const [pet, setPet] = useState([]);
// const getApi = async () => {
//   const res = await getById(petId);
//   setPet(res);
// };
// useEffect(() => {
//   getApi();
// }, []);
