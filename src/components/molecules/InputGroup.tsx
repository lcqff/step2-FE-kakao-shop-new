import React from 'react';
import Input from '@components/atoms/Input';
import Label from '@components/atoms/Label';

interface InputGroupProps {
  inputName?: string;
  labelName?: string;
}

const InputGroup = ({ inputName, labelName }: InputGroupProps) => {
  return (
    <div>
      <Label htmlFor={inputName}>{labelName}</Label>
      <Input type="text" id={inputName} />
    </div>
  );
};

export default InputGroup;