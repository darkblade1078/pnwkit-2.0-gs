import { Kit } from '../../..';
import { createAlliancePositionPaginator, mutationCreateAlliancePositionArgs } from '../../interfaces/mutations/alliancePosition';
import { allliancePosition } from '../../interfaces/queries/alliance';
import GraphQL from '../../services/GraphQL';

export interface Parameters {
    name: string;
    level: number;
    view_bank: boolean;
    withdraw_bank: boolean;
    change_permissions: boolean;
    see_spies: boolean;
    see_reset_timers: boolean;
    tax_brackets: boolean;
    post_announcements: boolean;
    manage_announcements: boolean;
    accept_applicants: boolean;
    remove_members: boolean;
    edit_alliance_info: boolean;
    manage_treaties: boolean;
    manage_market_share: boolean;
    manage_embargoes: boolean;
    promote_self_to_leader: boolean;
}

/**
 * create a position in the alliance
 * @param {Parameters} params Query parameters to customize your results
 * @param {string} query The graphql query to get info with
 * @param {boolean} paginator If true it will return paginator info
 * @return {Promise<allliancePosition| createAlliancePositionPaginator>}
 */
export default async function createAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator?: false): Promise<allliancePosition>;
export default async function createAlliancePositionMutation(this: Kit, params: Parameters, query: string, apiKey: string, paginator: true): Promise<createAlliancePositionPaginator>;
export default async function createAlliancePositionMutation(
  this: Kit,
  params: Parameters,
  query: string,
  apiKey: string,
  paginator?: boolean,
): Promise<allliancePosition | createAlliancePositionPaginator> {
  const argsToParameters = GraphQL.generateParameters(params as mutationCreateAlliancePositionArgs);

  const res = await GraphQL.makeMutationCall(`
    mutation {
        createAlliancePosition${argsToParameters} {
       ${(paginator) ?
      `
          paginatorInfo {
            count,
            currentPage,
            firstItem,
            hasMorePages,
            lastItem,
            lastPage,
            perPage,
            total
          },
          `: ''
    }
        
        ${query}
        
      }
    }
  `,
    apiKey,
    this.botKey,
  );

  this.setRateLimit(res.rateLimit);

  if (paginator)
    return res.data.createAlliancePosition as createAlliancePositionPaginator;


  return res.data.createAlliancePosition as allliancePosition;
}
