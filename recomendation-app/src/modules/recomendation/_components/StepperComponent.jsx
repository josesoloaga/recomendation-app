import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useRecomendation } from '../providers/useRecomendation';

const steps = ['Selecciona categoría', 'Selecciona subcategoría', 'Selecciona color'];

export default function StepperComponent() {
  const { currentStep } = useRecomendation();

  return (
    <Box sx={{ width: '90%', margin: '30px 5%' }}>
      <Stepper activeStep={currentStep - 1}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep === steps.length + 1 ? (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}