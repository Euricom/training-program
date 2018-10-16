/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>;
};

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

export interface Query {
  product?: Product | null;
  allProducts?: ProductConnection | null;
  basket?: Basket | null;
  user?: User | null;
  allUsers?: UserConnection | null;
  task?: Task | null;
  tasks?: (Task | null)[] | null;
}

export interface Product {
  id?: number | null;
  sku?: string | null;
  title?: string | null;
  desc?: string | null;
  image?: string | null;
  stocked?: boolean | null;
  basePrice?: number | null;
  price?: number | null;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges?: (ProductEdge | null)[] | null;
  totalCount?: number | null;
  product?: (Product | null)[] | null;
}

export interface PageInfo {
  startCursor?: string | null;
  endCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ProductEdge {
  node?: Product | null;
  cursor: string;
}

export interface Basket {
  checkoutID?: string | null;
  items?: (BasketItem | null)[] | null;
}

export interface BasketItem {
  product?: Product | null;
  quantity?: number | null;
}

export interface User {
  id?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  age?: number | null;
  email?: string | null;
  image?: string | null;
  phone?: string | null;
  company?: string | null;
  address?: Address | null;
}

export interface Address {
  street?: string | null;
  city?: string | null;
  zip?: string | null;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges?: (UserEdge | null)[] | null;
  totalCount?: number | null;
  user?: (User | null)[] | null;
}

export interface UserEdge {
  node?: User | null;
  cursor: string;
}

export interface Task {
  id?: number | null;
  desc?: string | null;
  completed?: boolean | null;
}

export interface Mutation {
  addOrUpdateUser?: AddOrUpdateUserPayload | null;
  deleteUser?: DeleteUserPayload | null;
  addOrUpdateProduct?: AddOrUpdateProductPayload | null;
  deleteProduct?: DeleteProductPayload | null;
  addItemToBasket?: AddItemToBasketPayload | null;
  removeItemFromBasket?: RemoveItemFromBasketPayload | null;
  clearBasket?: ClearBasketPayload | null;
  addTask?: AddTaskPayload | null;
  completeTask?: CompleteTaskPayload | null;
  deleteTask?: DeleteTaskPayload | null;
}

export interface AddOrUpdateUserPayload {
  user?: User | null;
}

export interface DeleteUserPayload {
  user?: User | null;
}

export interface AddOrUpdateProductPayload {
  product?: Product | null;
}

export interface DeleteProductPayload {
  product?: Product | null;
}

export interface AddItemToBasketPayload {
  basket?: Basket | null;
}

export interface RemoveItemFromBasketPayload {
  basket?: Basket | null;
}

export interface ClearBasketPayload {
  basket?: Basket | null;
}

export interface AddTaskPayload {
  task?: Task | null;
}

export interface CompleteTaskPayload {
  task?: Task | null;
}

export interface DeleteTaskPayload {
  task?: Task | null;
}

export interface UserInput {
  id?: number | null;
  firstName: string;
  lastName: string;
  age?: number | null;
  email: string;
  image?: string | null;
  phone?: string | null;
  company?: string | null;
  address?: AddressInput | null;
}

export interface AddressInput {
  street?: string | null;
  city?: string | null;
  zip?: string | null;
}

export interface ProductInput {
  id?: number | null;
  sku: string;
  title: string;
  desc?: string | null;
  image?: string | null;
  stocked?: boolean | null;
  basePrice?: number | null;
  price: number;
}

export interface AddItemToBasketInput {
  checkoutID: string;
  item: BasketItemInput;
}

export interface BasketItemInput {
  quantity: number;
  productId: number;
}

export interface RemoveItemFromBasketInput {
  checkoutID: string;
  productId: number;
}
export interface ProductQueryArgs {
  id?: number | null;
}
export interface AllProductsQueryArgs {
  orderBy?: string | null;
  first?: number | null;
  after?: string | null;
  before?: string | null;
  last?: number | null;
}
export interface BasketQueryArgs {
  checkoutID: string;
}
export interface UserQueryArgs {
  id?: number | null;
}
export interface AllUsersQueryArgs {
  orderBy?: string | null;
  first?: number | null;
  after?: string | null;
  before?: string | null;
  last?: number | null;
}
export interface TaskQueryArgs {
  id?: number | null;
}
export interface AddOrUpdateUserMutationArgs {
  input: UserInput;
}
export interface DeleteUserMutationArgs {
  id: number;
}
export interface AddOrUpdateProductMutationArgs {
  input: ProductInput;
}
export interface DeleteProductMutationArgs {
  id: number;
}
export interface AddItemToBasketMutationArgs {
  input: AddItemToBasketInput;
}
export interface RemoveItemFromBasketMutationArgs {
  input: RemoveItemFromBasketInput;
}
export interface ClearBasketMutationArgs {
  checkoutID?: string | null;
}
export interface AddTaskMutationArgs {
  desc: string;
}
export interface CompleteTaskMutationArgs {
  id: number;
}
export interface DeleteTaskMutationArgs {
  id: number;
}

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    product?: ProductResolver<Product | null, any, Context>;
    allProducts?: AllProductsResolver<ProductConnection | null, any, Context>;
    basket?: BasketResolver<Basket | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
    allUsers?: AllUsersResolver<UserConnection | null, any, Context>;
    task?: TaskResolver<Task | null, any, Context>;
    tasks?: TasksResolver<(Task | null)[] | null, any, Context>;
  }

  export type ProductResolver<
    R = Product | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ProductArgs>;
  export interface ProductArgs {
    id?: number | null;
  }

  export type AllProductsResolver<
    R = ProductConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllProductsArgs>;
  export interface AllProductsArgs {
    orderBy?: string | null;
    first?: number | null;
    after?: string | null;
    before?: string | null;
    last?: number | null;
  }

  export type BasketResolver<
    R = Basket | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, BasketArgs>;
  export interface BasketArgs {
    checkoutID: string;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UserArgs>;
  export interface UserArgs {
    id?: number | null;
  }

  export type AllUsersResolver<
    R = UserConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllUsersArgs>;
  export interface AllUsersArgs {
    orderBy?: string | null;
    first?: number | null;
    after?: string | null;
    before?: string | null;
    last?: number | null;
  }

  export type TaskResolver<
    R = Task | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, TaskArgs>;
  export interface TaskArgs {
    id?: number | null;
  }

  export type TasksResolver<
    R = (Task | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ProductResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number | null, any, Context>;
    sku?: SkuResolver<string | null, any, Context>;
    title?: TitleResolver<string | null, any, Context>;
    desc?: DescResolver<string | null, any, Context>;
    image?: ImageResolver<string | null, any, Context>;
    stocked?: StockedResolver<boolean | null, any, Context>;
    basePrice?: BasePriceResolver<number | null, any, Context>;
    price?: PriceResolver<number | null, any, Context>;
  }

  export type IdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type SkuResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StockedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type BasePriceResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ProductConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<PageInfo, any, Context>;
    edges?: EdgesResolver<(ProductEdge | null)[] | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    product?: ProductResolver<(Product | null)[] | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (ProductEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ProductResolver<
    R = (Product | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    startCursor?: StartCursorResolver<string | null, any, Context>;
    endCursor?: EndCursorResolver<string | null, any, Context>;
    hasNextPage?: HasNextPageResolver<boolean, any, Context>;
    hasPreviousPage?: HasPreviousPageResolver<boolean, any, Context>;
  }

  export type StartCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndCursorResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ProductEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<Product | null, any, Context>;
    cursor?: CursorResolver<string, any, Context>;
  }

  export type NodeResolver<
    R = Product | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BasketResolvers {
  export interface Resolvers<Context = any> {
    checkoutID?: CheckoutIdResolver<string | null, any, Context>;
    items?: ItemsResolver<(BasketItem | null)[] | null, any, Context>;
  }

  export type CheckoutIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ItemsResolver<
    R = (BasketItem | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace BasketItemResolvers {
  export interface Resolvers<Context = any> {
    product?: ProductResolver<Product | null, any, Context>;
    quantity?: QuantityResolver<number | null, any, Context>;
  }

  export type ProductResolver<
    R = Product | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number | null, any, Context>;
    firstName?: FirstNameResolver<string | null, any, Context>;
    lastName?: LastNameResolver<string | null, any, Context>;
    age?: AgeResolver<number | null, any, Context>;
    email?: EmailResolver<string | null, any, Context>;
    image?: ImageResolver<string | null, any, Context>;
    phone?: PhoneResolver<string | null, any, Context>;
    company?: CompanyResolver<string | null, any, Context>;
    address?: AddressResolver<Address | null, any, Context>;
  }

  export type IdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FirstNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AgeResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ImageResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CompanyResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AddressResolver<
    R = Address | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AddressResolvers {
  export interface Resolvers<Context = any> {
    street?: StreetResolver<string | null, any, Context>;
    city?: CityResolver<string | null, any, Context>;
    zip?: ZipResolver<string | null, any, Context>;
  }

  export type StreetResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ZipResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserConnectionResolvers {
  export interface Resolvers<Context = any> {
    pageInfo?: PageInfoResolver<PageInfo, any, Context>;
    edges?: EdgesResolver<(UserEdge | null)[] | null, any, Context>;
    totalCount?: TotalCountResolver<number | null, any, Context>;
    user?: UserResolver<(User | null)[] | null, any, Context>;
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = (UserEdge | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = (User | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace UserEdgeResolvers {
  export interface Resolvers<Context = any> {
    node?: NodeResolver<User | null, any, Context>;
    cursor?: CursorResolver<string, any, Context>;
  }

  export type NodeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CursorResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace TaskResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number | null, any, Context>;
    desc?: DescResolver<string | null, any, Context>;
    completed?: CompletedResolver<boolean | null, any, Context>;
  }

  export type IdResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DescResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type CompletedResolver<
    R = boolean | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    addOrUpdateUser?: AddOrUpdateUserResolver<
      AddOrUpdateUserPayload | null,
      any,
      Context
    >;
    deleteUser?: DeleteUserResolver<DeleteUserPayload | null, any, Context>;
    addOrUpdateProduct?: AddOrUpdateProductResolver<
      AddOrUpdateProductPayload | null,
      any,
      Context
    >;
    deleteProduct?: DeleteProductResolver<
      DeleteProductPayload | null,
      any,
      Context
    >;
    addItemToBasket?: AddItemToBasketResolver<
      AddItemToBasketPayload | null,
      any,
      Context
    >;
    removeItemFromBasket?: RemoveItemFromBasketResolver<
      RemoveItemFromBasketPayload | null,
      any,
      Context
    >;
    clearBasket?: ClearBasketResolver<ClearBasketPayload | null, any, Context>;
    addTask?: AddTaskResolver<AddTaskPayload | null, any, Context>;
    completeTask?: CompleteTaskResolver<
      CompleteTaskPayload | null,
      any,
      Context
    >;
    deleteTask?: DeleteTaskResolver<DeleteTaskPayload | null, any, Context>;
  }

  export type AddOrUpdateUserResolver<
    R = AddOrUpdateUserPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddOrUpdateUserArgs>;
  export interface AddOrUpdateUserArgs {
    input: UserInput;
  }

  export type DeleteUserResolver<
    R = DeleteUserPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteUserArgs>;
  export interface DeleteUserArgs {
    id: number;
  }

  export type AddOrUpdateProductResolver<
    R = AddOrUpdateProductPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddOrUpdateProductArgs>;
  export interface AddOrUpdateProductArgs {
    input: ProductInput;
  }

  export type DeleteProductResolver<
    R = DeleteProductPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteProductArgs>;
  export interface DeleteProductArgs {
    id: number;
  }

  export type AddItemToBasketResolver<
    R = AddItemToBasketPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddItemToBasketArgs>;
  export interface AddItemToBasketArgs {
    input: AddItemToBasketInput;
  }

  export type RemoveItemFromBasketResolver<
    R = RemoveItemFromBasketPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, RemoveItemFromBasketArgs>;
  export interface RemoveItemFromBasketArgs {
    input: RemoveItemFromBasketInput;
  }

  export type ClearBasketResolver<
    R = ClearBasketPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, ClearBasketArgs>;
  export interface ClearBasketArgs {
    checkoutID?: string | null;
  }

  export type AddTaskResolver<
    R = AddTaskPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AddTaskArgs>;
  export interface AddTaskArgs {
    desc: string;
  }

  export type CompleteTaskResolver<
    R = CompleteTaskPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CompleteTaskArgs>;
  export interface CompleteTaskArgs {
    id: number;
  }

  export type DeleteTaskResolver<
    R = DeleteTaskPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeleteTaskArgs>;
  export interface DeleteTaskArgs {
    id: number;
  }
}

export namespace AddOrUpdateUserPayloadResolvers {
  export interface Resolvers<Context = any> {
    user?: UserResolver<User | null, any, Context>;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DeleteUserPayloadResolvers {
  export interface Resolvers<Context = any> {
    user?: UserResolver<User | null, any, Context>;
  }

  export type UserResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AddOrUpdateProductPayloadResolvers {
  export interface Resolvers<Context = any> {
    product?: ProductResolver<Product | null, any, Context>;
  }

  export type ProductResolver<
    R = Product | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DeleteProductPayloadResolvers {
  export interface Resolvers<Context = any> {
    product?: ProductResolver<Product | null, any, Context>;
  }

  export type ProductResolver<
    R = Product | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AddItemToBasketPayloadResolvers {
  export interface Resolvers<Context = any> {
    basket?: BasketResolver<Basket | null, any, Context>;
  }

  export type BasketResolver<
    R = Basket | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace RemoveItemFromBasketPayloadResolvers {
  export interface Resolvers<Context = any> {
    basket?: BasketResolver<Basket | null, any, Context>;
  }

  export type BasketResolver<
    R = Basket | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace ClearBasketPayloadResolvers {
  export interface Resolvers<Context = any> {
    basket?: BasketResolver<Basket | null, any, Context>;
  }

  export type BasketResolver<
    R = Basket | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AddTaskPayloadResolvers {
  export interface Resolvers<Context = any> {
    task?: TaskResolver<Task | null, any, Context>;
  }

  export type TaskResolver<
    R = Task | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace CompleteTaskPayloadResolvers {
  export interface Resolvers<Context = any> {
    task?: TaskResolver<Task | null, any, Context>;
  }

  export type TaskResolver<
    R = Task | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace DeleteTaskPayloadResolvers {
  export interface Resolvers<Context = any> {
    task?: TaskResolver<Task | null, any, Context>;
  }

  export type TaskResolver<
    R = Task | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
