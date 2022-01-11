import React, {useState} from 'react';
import './App.css';
import StarRating from './StarRating';
import colorData from "./color-data.json";
import ColorList from './ColorList';

export default function App() {
  const [colors] = useState(colorData);
  return (
    <main>
      <StarRating />
      <ColorList colors={colors} />
    </main>
  );
}