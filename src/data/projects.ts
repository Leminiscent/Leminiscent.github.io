import { Project } from '../types';

import rpgImage from '/assets/rpg.webp';
import ticTacToeImage from '/assets/tic_tac_toe.webp';
import minesweeperImage from '/assets/minesweeper_screenshot.webp';
import wordleImage from '/assets/wordle.webp';
import gameBacklogManagerImage from '/assets/game_backlog_manager.webp';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Prototype RPG',
    description: 'A 2D monster-taming RPG featuring turn-based combat, character selection, party management, inventory systems, and more.',
    image: rpgImage,
    categories: ['C#', 'Desktop', 'Game', 'Unity'],
    githubUrl: 'https://github.com/Leminiscent/working_unity_project',
    liveUrl: 'https://leminiscent.itch.io/prototype-portfolio-rpg'
  },
  {
    id: 2,
    title: 'Tic-Tac-Toe',
    description: 'A simple Tic-Tac-Toe game with an AI opponent that uses the minimax algorithm for optimal play.',
    image: ticTacToeImage,
    categories: ['AI', 'Game', 'HTML/CSS', 'JavaScript', 'Web'],
    githubUrl: 'https://github.com/Leminiscent/tic_tac_toe',
    liveUrl: 'https://leminiscent.github.io/tic_tac_toe/'
  },
  {
    id: 3,
    title: 'Minesweeper',
    description: 'A classic Minesweeper game built with Pygame, featuring an AI assistant, customizable grid size, and a timer.',
    image: minesweeperImage,
    categories: ['AI', 'Desktop', 'Game', 'Pygame', 'Python'],
    githubUrl: 'https://github.com/Leminiscent/minesweeper'
  },
  {
    id: 4,
    title: 'Wordle',
    description: 'A Python implementation of Wordle featuring both CLI and GUI versions, with real-time word validation and dictionary API integration.',
    image: wordleImage,
    categories: ['CLI', 'Desktop', 'Game', 'Pygame', 'Python'],
    githubUrl: 'https://github.com/Leminiscent/wordle'
  },
  {
    id: 5,
    title: 'Game Backlog Manager',
    description: 'A command-line tool for managing your game backlog, allowing you to add, remove, and view games in your collection.',
    image: gameBacklogManagerImage,
    categories: ['Backend', 'CLI', 'Python'],
    githubUrl: 'https://github.com/Leminiscent/game_backlog_manager'
  }
];