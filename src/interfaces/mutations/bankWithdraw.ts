import { Maybe, Scalars } from ".."
import { paginatorInfo } from "../other"
import { bankrec } from "../queries/bank"

export type bankWithdrawPaginator = {
    __typename?: 'bankWithdrawPaginator'
    paginatorInfo: paginatorInfo
    data: bankrec
}

export type mutationBankWithdrawArgs = {
    receiver?: Scalars['Int']
    receiver_type?: Scalars['Int']
    money?: Maybe<Scalars['Float']>
    coal?: Maybe<Scalars['Float']>
    oil?: Maybe<Scalars['Float']>
    uranium?: Maybe<Scalars['Float']>
    iron?: Maybe<Scalars['Float']>
    bauxite?: Maybe<Scalars['Float']>
    lead?: Maybe<Scalars['Float']>
    gasoline?: Maybe<Scalars['Float']>
    munitions?: Maybe<Scalars['Float']>
    steel?: Maybe<Scalars['Float']>
    aluminum?: Maybe<Scalars['Float']>
    food?: Maybe<Scalars['Float']>
    note?: Maybe<Scalars['String']>
}