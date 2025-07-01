import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './Sample.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendario() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="Sample">
      <Calendar />
    </div>
  );
}
