"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash, SquarePen } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CardProps {
  src: string;
  alt: string;
  conteudo: string;
  data: string;
  duracao: string;
  nivel: string;
  tamanho: string;
}

const VideoCard: React.FC<CardProps> = ({ src, alt, conteudo, data, duracao, nivel, tamanho }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = () => {
    // Lógica de exclusão
    console.log("Vídeo excluído!");
    setDeleteOpen(false);
  };

  return (
    <div className=" rounded-xl w-64 bg-darkBlue-500">
      <Image
        className="border rounded-t-xl"
        src={src}
        alt={alt}
        width={256}
        height={192}
      />

      <div className="flex justify-between">
        <p className="text-[8px] text-white text-center ml-3 mt-2 border rounded-md w-36 h-6 pt-1">
          {conteudo}
        </p>
        <p className="text-[8px] text-white text-center ml-4 mr-8 mt-2 border rounded-md w-14 h-6 p-1">
          {data}
        </p>
      </div>
      <div className="flex justify-start">
        <p className="text-[8px] text-white text-center ml-3 mt-2 border rounded-md w-9 h-6 p-1">
          {duracao}
        </p>
        <p className="text-[8px] text-white text-center ml-2 mt-2 border rounded-md w-8 h-6 p-1">
          {nivel}
        </p>
        <p className="text-[8px] text-white text-center ml-2 mt-2 border rounded-md w-10 h-6 p-1">
          {tamanho}
        </p>
      </div>

      <div className="flex">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="default"
              className="h-8 w-8 p-0 ml-2 mt-1 bg-transparent border-0"
            >
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="text-darkBlue-500 font-bold"
          >
            <DropdownMenuItem onSelect={() => setEditOpen(true)}>
              <SquarePen className="mr-2 h-4 w-4" />
              Editar Vídeo
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setDeleteOpen(true)}>
              <Trash className="mr-2 h-4 w-4" />
              Excluir Vídeo
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-[600px] w-full">
          <DialogHeader>
            <DialogTitle className="text-[40px] font-bold text-darkBlue-500">
              Editar Vídeo
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid">
              <Label
                htmlFor="link"
                className="text-xs font-bold text-darkBlue-600"
              >
                LINK DO VÍDEO
              </Label>
              <Input
                id="link"
                className="border-darkBlue-400"
                placeholder="http://sia.com.br"
              />
            </div>
            <div className="grid">
              <Label
                htmlFor="name"
                className="text-xs font-bold text-darkBlue-600"
              >
                NOME DO VÍDEO
              </Label>
              <Input
                id="name"
                className="border-darkBlue-400"
                placeholder="Nome vídeo EPTRAN"
              />
            </div>
            <div className="grid">
              <Label
                htmlFor="description"
                className="text-xs font-bold text-darkBlue-600"
              >
                DESCRIÇÃO DO VÍDEO
              </Label>
              <Textarea
                id="description"
                placeholder="Descrição vídeo EPTRAN"
                className="border-darkBlue-400"
              />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="w-[45%]">
              <Label
                htmlFor="classification"
                className="text-xs font-bold text-darkBlue-600 block"
              >
                CLASSIFICAÇÃO
              </Label>
              <Select>
                <SelectTrigger className="border-darkBlue-400 w-full">
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">Ensino Médio</SelectItem>
                  <SelectItem value="elementary">Ensino Fundamental</SelectItem>
                  <SelectItem value="early-grades">Séries Iniciais</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[45%] flex justify-end space-x-2">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="w-full border-darkBlue-400 font-bold text-xs hover:bg-slate-200"
                  onClick={() => setEditOpen(false)}
                >
                  CANCELAR
                </Button>
              </DialogClose>
              <Button
                type="submit"
                className="w-full bg-darkBlue-500 text-white font-bold text-xs"
              >
                ENVIAR
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-[400px] w-full">
          <DialogHeader>
            <DialogTitle className="text-[24px] font-bold text-darkBlue-500">
              Excluir Vídeo
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-darkBlue-600">
              Tem certeza de que deseja excluir este vídeo? Esta ação não pode ser desfeita.
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border-darkBlue-400 font-bold text-xs hover:bg-slate-200"
                onClick={() => setDeleteOpen(false)}
              >
                CANCELAR
              </Button>
            </DialogClose>
            <Button
              className="bg-red-500 text-white font-bold text-xs"
              onClick={handleDelete}
            >
              EXCLUIR
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoCard;
