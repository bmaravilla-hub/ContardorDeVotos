// src/components/VoteOption.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const OptionContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OptionName = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const VoteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const VoteOption = ({ name, votes, totalVotes, onVote }) => {
  const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(2) : 0;

  
  return (
    <OptionContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <OptionName>
         {name}
      </OptionName>
      <span>{percentage}%</span>
      <VoteButton onClick={onVote}>
        Votar
      </VoteButton>
    </OptionContainer>
  );
};

export default VoteOption;