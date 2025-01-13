import { CreateUserInput } from '../../api/services/userService';
import { useCreateUser } from '../../hooks/queries/useUsers';

export function AddUserDialog({ onClose }: { onClose: () => void }) {
  const createUser = useCreateUser();

  const handleSubmit = async (data: CreateUserInput) => {
    try {
      await createUser.mutateAsync(data);
      onClose();
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  // ... rest of the component
}