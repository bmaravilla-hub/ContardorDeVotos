import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VoteOption from './VoteOption';
import theme from '../styles/theme';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  display: flex;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  gap: 2rem;
`;

const VoteContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChartContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 400px;
`;

const ResetButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const VoteList = () => {
  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('votes');
    return savedVotes ? JSON.parse(savedVotes) : {
      React: 0,
      Vue: 0,
      Angular: 0,
      Svelte: 0,
      Ember: 0,
    };
  });

  const totalVotes = Object.values(votes).reduce((acc, curr) => acc + curr, 0);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  const handleReset = () => {
    setVotes({
      React: 0,
      Vue: 0,
      Angular: 0,
      Svelte: 0,
      Ember: 0,
    });
  };

  const data = Object.entries(votes).map(([name, value]) => ({
    name,
    votos: value,
  }));

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Columna izquierda: Lista de opciones para votar */}
      <VoteContainer>
        <h1>Contador de Votos</h1>
        {Object.entries(votes).map(([option, voteCount]) => (
          <VoteOption
            key={option}
            name={option}
            votes={voteCount}
            totalVotes={totalVotes}
            onVote={() => handleVote(option)}
          />
        ))}
        <ResetButton onClick={handleReset}>Reiniciar Votos</ResetButton>
      </VoteContainer>

      {/* Columna derecha: Gráfica de barras */}
      <ChartContainer>
        <h2>Resultados de Votación</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="votos" fill={theme.colors.chart} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};

export default VoteList;