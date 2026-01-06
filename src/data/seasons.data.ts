import { Season } from 'src/seasons/entities/season.entity';

export const seasonsData: Season[] = [
  {
    id: 1,
    number: 1,
    title: 'The Vanishing of Will Byers',
    episodes: 8,
    releaseYear: 2016,
    description:
      'Will Byers desaparece misteriosamente y sus amigos descubren a una niña con poderes sobrenaturales. Juntos descubren un mundo paralelo oscuro conocido como el Mundo del Revés.',
    villain: 'Demogorgon',
  },
  {
    id: 2,
    number: 2,
    title: 'The Mind Flayer',
    episodes: 9,
    releaseYear: 2017,
    description:
      'Will regresa del Mundo del Revés pero con una conexión persistente con la dimensión. Una nueva amenaza, el Azotamentes, comienza a poseer a los habitantes de Hawkins.',
    villain: 'Azotamentes',
  },
  {
    id: 3,
    number: 3,
    title: 'The Battle of Starcourt',
    episodes: 8,
    releaseYear: 2019,
    description:
      'Durante el verano, los rusos intentan reabrir el portal al Mundo del Revés bajo el nuevo centro comercial Starcourt. El Azotamentes regresa a través de huéspedes infectados.',
    villain: 'Azotamentes',
  },
  {
    id: 4,
    number: 4,
    title: "Vecna's Curse",
    episodes: 9,
    releaseYear: 2022,
    description:
      'Seis meses después de la Batalla de Starcourt, un nuevo y aterrador villano llamado Vecna atormenta a Hawkins. Los secretos del pasado del Laboratorio Hawkins son revelados.',
    villain: 'Vecna / Henry Creel',
  },
  {
    id: 5,
    number: 5,
    title: 'The Final Battle',
    episodes: 8,
    releaseYear: 2025,
    description:
      'La temporada final promete concluir la batalla entre Hawkins y el Mundo del Revés. El destino de todos los personajes se decidirá en el enfrentamiento definitivo.',
    villain: 'Por confirmarse',
  },
];
