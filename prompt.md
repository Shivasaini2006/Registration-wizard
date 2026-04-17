# Registration Wizard Requirements Prompt

Build a complete React application for a multi-step form wizard called "Registration Wizard".

Tech Requirements:
- Use React (functional components)
- Use react-hook-form for form state management
- Use zod for schema validation
- Use @hookform/resolvers/zod for integration
- Use modern UI styling (Tailwind CSS preferred)

Core Features:

1. Multi-Step Form (3 Steps)
- Step 1: Personal Info
  - First Name (required, min 2 chars)
  - Last Name (required, min 2 chars)
  - Date of Birth (required)

- Step 2: Account Details
  - Email (required, must be valid email format)
  - Password (required, min 8 characters)
  - Confirm Password (must match Password)

- Step 3: Review & Submit
  - Display all entered data clearly
  - Include "Edit" navigation (Back button)

2. Navigation
- "Next" and "Back" buttons
- Preserve all form data when navigating between steps
- Do NOT lose state when switching steps

3. Validation (IMPORTANT)
- Use Zod schema for validation
- Real-time validation (onChange or onBlur)
- Show error messages below inputs
- Disable "Next" button unless current step is valid

4. UX Features
- Show/Hide password toggle (eye icon)
- Progress bar at top:
  - Step 1 of 3
  - Step 2 of 3
  - Step 3 of 3
- Clean, modern UI (centered card layout)

5. Form Handling
- Use react-hook-form with FormProvider to share state across steps
- Each step should be a separate component
- Use useFormContext inside child components

6. Submission
- On final submit:
  - console.log full form data
  - show a "Success!" screen (replace form UI)

7. Code Structure
- App.js (parent controller)
- components/
  - Step1.jsx
  - Step2.jsx
  - Step3.jsx
  - Success.jsx
  - ProgressBar.jsx
- validation/
  - schema.js (Zod schema)

8. Extra Requirements
- Password and Confirm Password validation must be handled via Zod refinement
- Keep code clean and modular
- Add comments explaining important parts

Deliverables:
- Full working React code
- All components included
- Proper imports
- No missing dependencies

Bonus (if possible):
- Smooth transitions between steps
- Responsive design for mobile
