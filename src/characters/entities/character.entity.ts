export class Character {
  id: number;
  name: string;
  actor: string;
  description: string;
  status: 'vivo' | 'muerto' | 'desconocido';
  abilities?: string[];
}
