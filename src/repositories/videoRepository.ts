import { EscolaridadeEnum, PrismaClient, Videos } from "@prisma/client";

import { ListVideos } from "../../types/Videos";
import prismaClient from "../prisma";

const prisma = new PrismaClient();

export class VideoRepository {
  // Método para criar um vídeo
  async create(
    escolaridade: EscolaridadeEnum,
    videoLink: string,
    descricao: string,
    titulo: string
  ): Promise<Videos> {
    return prisma.videos.create({
      data: {
        titulo,
        descricao,
        escolaridade,
        videoLink,
      },
    });
  }

  // Método para buscar vídeos por escolaridade
  async findByEscolaridade(escolaridade: EscolaridadeEnum): Promise<Videos[]> {
    return prisma.videos.findMany({
      where: {
        escolaridade,
      },
    });
  }

  // Método para listar vídeos com paginação
  async listVideos(page: number, limit: number): Promise<ListVideos> {
    const [videos, totalVideos] = await prismaClient.$transaction([
      prismaClient.videos.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      prismaClient.videos.count(),
    ]);

    return {
      videos,
      totalVideos,
      totalPages: Math.ceil(totalVideos / limit),
    };
  }

  // Método para atualizar um vídeo pelo ID
  async updateVideo(
    id: number,
    data: Partial<Videos> // Recebe os campos a serem atualizados
  ): Promise<Videos | null> {
    return prisma.videos.update({
      where: { id },
      data, // Atualiza apenas os campos passados
    });
  }
  async findById(id: number): Promise<Videos | null> {
    return prisma.videos.findUnique({
      where: { id },
    });
  }

  // Método para deletar vídeo pelo ID
  async delete(id: number): Promise<void> {
    await prisma.videos.delete({
      where: { id },
    });
  }
}

