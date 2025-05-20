import { useCreate, useDelete, useUpdate, useView } from '../../actions';
import type { IEntity, IUseEntityResult } from './types';

const useEntity = <T extends IEntity>(apiUrl: string, entityName: string): IUseEntityResult<T> => {
  const { view } = useView<T[] | T>({});
  const { update } = useUpdate<T, T>({});
  const { create } = useCreate<T, T>({});
  const { remove } = useDelete<string>({});

  const getEntities = async () => {
    try {
      const res = await view({ url: `${apiUrl}${entityName}` });
      return res;
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const getEntity = async (entityId: string) => {
    try {
      const res = await view({ url: `${apiUrl}${entityName}/${entityId}` });
      return res;
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const createEntity = async (entity: T) => {
    try {
      const res = await create({ body: { ...entity }, url: `${apiUrl}${entityName}` });
      return res;
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const updateEntity = async (entity: T) => {
    try {
      const target = (Array.isArray(entity) ? entity[0] : entity) as IEntity;
      const res = await update({
        body: { ...entity },
        method: 'PUT',
        url: `${apiUrl}${entityName}/${target.id}`,
      });
      return res;
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const removeEntity = async (entity: T) => {
    try {
      const target = (Array.isArray(entity) ? entity[0] : entity) as IEntity;
      const res = await remove({
        url: `${apiUrl}${entityName}/${target.id}`,
      });
      return res;
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    getEntities,
    getEntity,
    createEntity,
    updateEntity,
    removeEntity,
  };
};
export default useEntity;
