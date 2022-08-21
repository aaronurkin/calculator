import { Provider } from '@nestjs/common';
import { IOperation } from '@services/application/operation';
import { ServiceToken } from '@services/application/service-token';
import { MultiplicationOperation } from '@infrastructure/application/operations/multiplication.operation';

export const MultiplicationOperationProvider: Provider<IOperation> = {
  provide: `${ServiceToken.operation}*`,
  useClass: MultiplicationOperation,
};
