import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ProviderDataSource} from '../datasources';
import {Web3C, Web3CRelations} from '../models';

export class Web3CRepository extends DefaultCrudRepository<
  Web3C,
  typeof Web3C.prototype.id,
  Web3CRelations
> {
  constructor(
    @inject('datasources.provider') dataSource: ProviderDataSource,
  ) {
    super(Web3C, dataSource);
  }
}
