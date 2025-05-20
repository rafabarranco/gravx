export interface IEntity {
  id: string | number;
}

export interface IUseEntityResult<T extends IEntity> {
  getEntities: () => Promise<T[] | T | undefined>;
  getEntity: (entityId: string) => Promise<T | T[] | undefined>;
  createEntity: (entity: T) => Promise<T | undefined>;
  updateEntity: (entity: T) => Promise<T | undefined>;
  removeEntity: (entity: T) => Promise<string | undefined>;
}
