// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  book: (where?: BookWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  book: (where: BookWhereUniqueInput) => BookNullablePromise;
  books: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Book>;
  booksConnection: (args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => BookConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBook: (data: BookCreateInput) => BookPromise;
  updateBook: (args: {
    data: BookUpdateInput;
    where: BookWhereUniqueInput;
  }) => BookPromise;
  updateManyBooks: (args: {
    data: BookUpdateManyMutationInput;
    where?: BookWhereInput;
  }) => BatchPayloadPromise;
  upsertBook: (args: {
    where: BookWhereUniqueInput;
    create: BookCreateInput;
    update: BookUpdateInput;
  }) => BookPromise;
  deleteBook: (where: BookWhereUniqueInput) => BookPromise;
  deleteManyBooks: (where?: BookWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  book: (
    where?: BookSubscriptionWhereInput
  ) => BookSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type BookOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "dateAdded_ASC"
  | "dateAdded_DESC"
  | "title_ASC"
  | "title_DESC"
  | "era_ASC"
  | "era_DESC"
  | "author_ASC"
  | "author_DESC"
  | "releaseDate_ASC"
  | "releaseDate_DESC"
  | "imageId_ASC"
  | "imageId_DESC"
  | "summary_ASC"
  | "summary_DESC"
  | "pages_ASC"
  | "pages_DESC"
  | "isbn_ASC"
  | "isbn_DESC"
  | "timeLine_ASC"
  | "timeLine_DESC"
  | "series_ASC"
  | "series_DESC"
  | "bookStatus_ASC"
  | "bookStatus_DESC"
  | "epochTime_ASC"
  | "epochTime_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneWithoutBooksInput {
  create?: Maybe<UserCreateWithoutBooksInput>;
  update?: Maybe<UserUpdateWithoutBooksDataInput>;
  upsert?: Maybe<UserUpsertWithoutBooksInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type BookWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface BookUpdateWithWhereUniqueWithoutPostedByInput {
  where: BookWhereUniqueInput;
  data: BookUpdateWithoutPostedByDataInput;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  password: String;
  books?: Maybe<BookCreateManyWithoutPostedByInput>;
}

export interface BookUpdateManyWithoutPostedByInput {
  create?: Maybe<
    BookCreateWithoutPostedByInput[] | BookCreateWithoutPostedByInput
  >;
  delete?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  connect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  set?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  disconnect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
  update?: Maybe<
    | BookUpdateWithWhereUniqueWithoutPostedByInput[]
    | BookUpdateWithWhereUniqueWithoutPostedByInput
  >;
  upsert?: Maybe<
    | BookUpsertWithWhereUniqueWithoutPostedByInput[]
    | BookUpsertWithWhereUniqueWithoutPostedByInput
  >;
  deleteMany?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  updateMany?: Maybe<
    BookUpdateManyWithWhereNestedInput[] | BookUpdateManyWithWhereNestedInput
  >;
}

export interface UserUpsertWithoutBooksInput {
  update: UserUpdateWithoutBooksDataInput;
  create: UserCreateWithoutBooksInput;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  books_every?: Maybe<BookWhereInput>;
  books_some?: Maybe<BookWhereInput>;
  books_none?: Maybe<BookWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface BookSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<BookWhereInput>;
  AND?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  OR?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
  NOT?: Maybe<BookSubscriptionWhereInput[] | BookSubscriptionWhereInput>;
}

export interface BookCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  era: String;
  author: String;
  releaseDate: String;
  imageId: String;
  summary: String;
  pages: Int;
  isbn: Int;
  timeLine: String;
  series?: Maybe<String>;
  bookStatus: String;
  epochTime: String;
  postedBy?: Maybe<UserCreateOneWithoutBooksInput>;
}

export interface BookUpdateManyDataInput {
  title?: Maybe<String>;
  era?: Maybe<String>;
  author?: Maybe<String>;
  releaseDate?: Maybe<String>;
  imageId?: Maybe<String>;
  summary?: Maybe<String>;
  pages?: Maybe<Int>;
  isbn?: Maybe<Int>;
  timeLine?: Maybe<String>;
  series?: Maybe<String>;
  bookStatus?: Maybe<String>;
  epochTime?: Maybe<String>;
}

export interface UserCreateOneWithoutBooksInput {
  create?: Maybe<UserCreateWithoutBooksInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface BookScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  dateAdded?: Maybe<DateTimeInput>;
  dateAdded_not?: Maybe<DateTimeInput>;
  dateAdded_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateAdded_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateAdded_lt?: Maybe<DateTimeInput>;
  dateAdded_lte?: Maybe<DateTimeInput>;
  dateAdded_gt?: Maybe<DateTimeInput>;
  dateAdded_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  era?: Maybe<String>;
  era_not?: Maybe<String>;
  era_in?: Maybe<String[] | String>;
  era_not_in?: Maybe<String[] | String>;
  era_lt?: Maybe<String>;
  era_lte?: Maybe<String>;
  era_gt?: Maybe<String>;
  era_gte?: Maybe<String>;
  era_contains?: Maybe<String>;
  era_not_contains?: Maybe<String>;
  era_starts_with?: Maybe<String>;
  era_not_starts_with?: Maybe<String>;
  era_ends_with?: Maybe<String>;
  era_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  releaseDate?: Maybe<String>;
  releaseDate_not?: Maybe<String>;
  releaseDate_in?: Maybe<String[] | String>;
  releaseDate_not_in?: Maybe<String[] | String>;
  releaseDate_lt?: Maybe<String>;
  releaseDate_lte?: Maybe<String>;
  releaseDate_gt?: Maybe<String>;
  releaseDate_gte?: Maybe<String>;
  releaseDate_contains?: Maybe<String>;
  releaseDate_not_contains?: Maybe<String>;
  releaseDate_starts_with?: Maybe<String>;
  releaseDate_not_starts_with?: Maybe<String>;
  releaseDate_ends_with?: Maybe<String>;
  releaseDate_not_ends_with?: Maybe<String>;
  imageId?: Maybe<String>;
  imageId_not?: Maybe<String>;
  imageId_in?: Maybe<String[] | String>;
  imageId_not_in?: Maybe<String[] | String>;
  imageId_lt?: Maybe<String>;
  imageId_lte?: Maybe<String>;
  imageId_gt?: Maybe<String>;
  imageId_gte?: Maybe<String>;
  imageId_contains?: Maybe<String>;
  imageId_not_contains?: Maybe<String>;
  imageId_starts_with?: Maybe<String>;
  imageId_not_starts_with?: Maybe<String>;
  imageId_ends_with?: Maybe<String>;
  imageId_not_ends_with?: Maybe<String>;
  summary?: Maybe<String>;
  summary_not?: Maybe<String>;
  summary_in?: Maybe<String[] | String>;
  summary_not_in?: Maybe<String[] | String>;
  summary_lt?: Maybe<String>;
  summary_lte?: Maybe<String>;
  summary_gt?: Maybe<String>;
  summary_gte?: Maybe<String>;
  summary_contains?: Maybe<String>;
  summary_not_contains?: Maybe<String>;
  summary_starts_with?: Maybe<String>;
  summary_not_starts_with?: Maybe<String>;
  summary_ends_with?: Maybe<String>;
  summary_not_ends_with?: Maybe<String>;
  pages?: Maybe<Int>;
  pages_not?: Maybe<Int>;
  pages_in?: Maybe<Int[] | Int>;
  pages_not_in?: Maybe<Int[] | Int>;
  pages_lt?: Maybe<Int>;
  pages_lte?: Maybe<Int>;
  pages_gt?: Maybe<Int>;
  pages_gte?: Maybe<Int>;
  isbn?: Maybe<Int>;
  isbn_not?: Maybe<Int>;
  isbn_in?: Maybe<Int[] | Int>;
  isbn_not_in?: Maybe<Int[] | Int>;
  isbn_lt?: Maybe<Int>;
  isbn_lte?: Maybe<Int>;
  isbn_gt?: Maybe<Int>;
  isbn_gte?: Maybe<Int>;
  timeLine?: Maybe<String>;
  timeLine_not?: Maybe<String>;
  timeLine_in?: Maybe<String[] | String>;
  timeLine_not_in?: Maybe<String[] | String>;
  timeLine_lt?: Maybe<String>;
  timeLine_lte?: Maybe<String>;
  timeLine_gt?: Maybe<String>;
  timeLine_gte?: Maybe<String>;
  timeLine_contains?: Maybe<String>;
  timeLine_not_contains?: Maybe<String>;
  timeLine_starts_with?: Maybe<String>;
  timeLine_not_starts_with?: Maybe<String>;
  timeLine_ends_with?: Maybe<String>;
  timeLine_not_ends_with?: Maybe<String>;
  series?: Maybe<String>;
  series_not?: Maybe<String>;
  series_in?: Maybe<String[] | String>;
  series_not_in?: Maybe<String[] | String>;
  series_lt?: Maybe<String>;
  series_lte?: Maybe<String>;
  series_gt?: Maybe<String>;
  series_gte?: Maybe<String>;
  series_contains?: Maybe<String>;
  series_not_contains?: Maybe<String>;
  series_starts_with?: Maybe<String>;
  series_not_starts_with?: Maybe<String>;
  series_ends_with?: Maybe<String>;
  series_not_ends_with?: Maybe<String>;
  bookStatus?: Maybe<String>;
  bookStatus_not?: Maybe<String>;
  bookStatus_in?: Maybe<String[] | String>;
  bookStatus_not_in?: Maybe<String[] | String>;
  bookStatus_lt?: Maybe<String>;
  bookStatus_lte?: Maybe<String>;
  bookStatus_gt?: Maybe<String>;
  bookStatus_gte?: Maybe<String>;
  bookStatus_contains?: Maybe<String>;
  bookStatus_not_contains?: Maybe<String>;
  bookStatus_starts_with?: Maybe<String>;
  bookStatus_not_starts_with?: Maybe<String>;
  bookStatus_ends_with?: Maybe<String>;
  bookStatus_not_ends_with?: Maybe<String>;
  epochTime?: Maybe<String>;
  epochTime_not?: Maybe<String>;
  epochTime_in?: Maybe<String[] | String>;
  epochTime_not_in?: Maybe<String[] | String>;
  epochTime_lt?: Maybe<String>;
  epochTime_lte?: Maybe<String>;
  epochTime_gt?: Maybe<String>;
  epochTime_gte?: Maybe<String>;
  epochTime_contains?: Maybe<String>;
  epochTime_not_contains?: Maybe<String>;
  epochTime_starts_with?: Maybe<String>;
  epochTime_not_starts_with?: Maybe<String>;
  epochTime_ends_with?: Maybe<String>;
  epochTime_not_ends_with?: Maybe<String>;
  AND?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  OR?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
  NOT?: Maybe<BookScalarWhereInput[] | BookScalarWhereInput>;
}

export interface UserCreateWithoutBooksInput {
  id?: Maybe<ID_Input>;
  name: String;
  password: String;
}

export interface BookUpsertWithWhereUniqueWithoutPostedByInput {
  where: BookWhereUniqueInput;
  update: BookUpdateWithoutPostedByDataInput;
  create: BookCreateWithoutPostedByInput;
}

export interface BookUpdateInput {
  title?: Maybe<String>;
  era?: Maybe<String>;
  author?: Maybe<String>;
  releaseDate?: Maybe<String>;
  imageId?: Maybe<String>;
  summary?: Maybe<String>;
  pages?: Maybe<Int>;
  isbn?: Maybe<Int>;
  timeLine?: Maybe<String>;
  series?: Maybe<String>;
  bookStatus?: Maybe<String>;
  epochTime?: Maybe<String>;
  postedBy?: Maybe<UserUpdateOneWithoutBooksInput>;
}

export interface BookWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  dateAdded?: Maybe<DateTimeInput>;
  dateAdded_not?: Maybe<DateTimeInput>;
  dateAdded_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateAdded_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  dateAdded_lt?: Maybe<DateTimeInput>;
  dateAdded_lte?: Maybe<DateTimeInput>;
  dateAdded_gt?: Maybe<DateTimeInput>;
  dateAdded_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  era?: Maybe<String>;
  era_not?: Maybe<String>;
  era_in?: Maybe<String[] | String>;
  era_not_in?: Maybe<String[] | String>;
  era_lt?: Maybe<String>;
  era_lte?: Maybe<String>;
  era_gt?: Maybe<String>;
  era_gte?: Maybe<String>;
  era_contains?: Maybe<String>;
  era_not_contains?: Maybe<String>;
  era_starts_with?: Maybe<String>;
  era_not_starts_with?: Maybe<String>;
  era_ends_with?: Maybe<String>;
  era_not_ends_with?: Maybe<String>;
  author?: Maybe<String>;
  author_not?: Maybe<String>;
  author_in?: Maybe<String[] | String>;
  author_not_in?: Maybe<String[] | String>;
  author_lt?: Maybe<String>;
  author_lte?: Maybe<String>;
  author_gt?: Maybe<String>;
  author_gte?: Maybe<String>;
  author_contains?: Maybe<String>;
  author_not_contains?: Maybe<String>;
  author_starts_with?: Maybe<String>;
  author_not_starts_with?: Maybe<String>;
  author_ends_with?: Maybe<String>;
  author_not_ends_with?: Maybe<String>;
  releaseDate?: Maybe<String>;
  releaseDate_not?: Maybe<String>;
  releaseDate_in?: Maybe<String[] | String>;
  releaseDate_not_in?: Maybe<String[] | String>;
  releaseDate_lt?: Maybe<String>;
  releaseDate_lte?: Maybe<String>;
  releaseDate_gt?: Maybe<String>;
  releaseDate_gte?: Maybe<String>;
  releaseDate_contains?: Maybe<String>;
  releaseDate_not_contains?: Maybe<String>;
  releaseDate_starts_with?: Maybe<String>;
  releaseDate_not_starts_with?: Maybe<String>;
  releaseDate_ends_with?: Maybe<String>;
  releaseDate_not_ends_with?: Maybe<String>;
  imageId?: Maybe<String>;
  imageId_not?: Maybe<String>;
  imageId_in?: Maybe<String[] | String>;
  imageId_not_in?: Maybe<String[] | String>;
  imageId_lt?: Maybe<String>;
  imageId_lte?: Maybe<String>;
  imageId_gt?: Maybe<String>;
  imageId_gte?: Maybe<String>;
  imageId_contains?: Maybe<String>;
  imageId_not_contains?: Maybe<String>;
  imageId_starts_with?: Maybe<String>;
  imageId_not_starts_with?: Maybe<String>;
  imageId_ends_with?: Maybe<String>;
  imageId_not_ends_with?: Maybe<String>;
  summary?: Maybe<String>;
  summary_not?: Maybe<String>;
  summary_in?: Maybe<String[] | String>;
  summary_not_in?: Maybe<String[] | String>;
  summary_lt?: Maybe<String>;
  summary_lte?: Maybe<String>;
  summary_gt?: Maybe<String>;
  summary_gte?: Maybe<String>;
  summary_contains?: Maybe<String>;
  summary_not_contains?: Maybe<String>;
  summary_starts_with?: Maybe<String>;
  summary_not_starts_with?: Maybe<String>;
  summary_ends_with?: Maybe<String>;
  summary_not_ends_with?: Maybe<String>;
  pages?: Maybe<Int>;
  pages_not?: Maybe<Int>;
  pages_in?: Maybe<Int[] | Int>;
  pages_not_in?: Maybe<Int[] | Int>;
  pages_lt?: Maybe<Int>;
  pages_lte?: Maybe<Int>;
  pages_gt?: Maybe<Int>;
  pages_gte?: Maybe<Int>;
  isbn?: Maybe<Int>;
  isbn_not?: Maybe<Int>;
  isbn_in?: Maybe<Int[] | Int>;
  isbn_not_in?: Maybe<Int[] | Int>;
  isbn_lt?: Maybe<Int>;
  isbn_lte?: Maybe<Int>;
  isbn_gt?: Maybe<Int>;
  isbn_gte?: Maybe<Int>;
  timeLine?: Maybe<String>;
  timeLine_not?: Maybe<String>;
  timeLine_in?: Maybe<String[] | String>;
  timeLine_not_in?: Maybe<String[] | String>;
  timeLine_lt?: Maybe<String>;
  timeLine_lte?: Maybe<String>;
  timeLine_gt?: Maybe<String>;
  timeLine_gte?: Maybe<String>;
  timeLine_contains?: Maybe<String>;
  timeLine_not_contains?: Maybe<String>;
  timeLine_starts_with?: Maybe<String>;
  timeLine_not_starts_with?: Maybe<String>;
  timeLine_ends_with?: Maybe<String>;
  timeLine_not_ends_with?: Maybe<String>;
  series?: Maybe<String>;
  series_not?: Maybe<String>;
  series_in?: Maybe<String[] | String>;
  series_not_in?: Maybe<String[] | String>;
  series_lt?: Maybe<String>;
  series_lte?: Maybe<String>;
  series_gt?: Maybe<String>;
  series_gte?: Maybe<String>;
  series_contains?: Maybe<String>;
  series_not_contains?: Maybe<String>;
  series_starts_with?: Maybe<String>;
  series_not_starts_with?: Maybe<String>;
  series_ends_with?: Maybe<String>;
  series_not_ends_with?: Maybe<String>;
  bookStatus?: Maybe<String>;
  bookStatus_not?: Maybe<String>;
  bookStatus_in?: Maybe<String[] | String>;
  bookStatus_not_in?: Maybe<String[] | String>;
  bookStatus_lt?: Maybe<String>;
  bookStatus_lte?: Maybe<String>;
  bookStatus_gt?: Maybe<String>;
  bookStatus_gte?: Maybe<String>;
  bookStatus_contains?: Maybe<String>;
  bookStatus_not_contains?: Maybe<String>;
  bookStatus_starts_with?: Maybe<String>;
  bookStatus_not_starts_with?: Maybe<String>;
  bookStatus_ends_with?: Maybe<String>;
  bookStatus_not_ends_with?: Maybe<String>;
  epochTime?: Maybe<String>;
  epochTime_not?: Maybe<String>;
  epochTime_in?: Maybe<String[] | String>;
  epochTime_not_in?: Maybe<String[] | String>;
  epochTime_lt?: Maybe<String>;
  epochTime_lte?: Maybe<String>;
  epochTime_gt?: Maybe<String>;
  epochTime_gte?: Maybe<String>;
  epochTime_contains?: Maybe<String>;
  epochTime_not_contains?: Maybe<String>;
  epochTime_starts_with?: Maybe<String>;
  epochTime_not_starts_with?: Maybe<String>;
  epochTime_ends_with?: Maybe<String>;
  epochTime_not_ends_with?: Maybe<String>;
  postedBy?: Maybe<UserWhereInput>;
  AND?: Maybe<BookWhereInput[] | BookWhereInput>;
  OR?: Maybe<BookWhereInput[] | BookWhereInput>;
  NOT?: Maybe<BookWhereInput[] | BookWhereInput>;
}

export interface UserUpdateInput {
  name?: Maybe<String>;
  password?: Maybe<String>;
  books?: Maybe<BookUpdateManyWithoutPostedByInput>;
}

export interface UserUpdateManyMutationInput {
  name?: Maybe<String>;
  password?: Maybe<String>;
}

export interface BookCreateManyWithoutPostedByInput {
  create?: Maybe<
    BookCreateWithoutPostedByInput[] | BookCreateWithoutPostedByInput
  >;
  connect?: Maybe<BookWhereUniqueInput[] | BookWhereUniqueInput>;
}

export interface BookUpdateManyMutationInput {
  title?: Maybe<String>;
  era?: Maybe<String>;
  author?: Maybe<String>;
  releaseDate?: Maybe<String>;
  imageId?: Maybe<String>;
  summary?: Maybe<String>;
  pages?: Maybe<Int>;
  isbn?: Maybe<Int>;
  timeLine?: Maybe<String>;
  series?: Maybe<String>;
  bookStatus?: Maybe<String>;
  epochTime?: Maybe<String>;
}

export interface BookCreateWithoutPostedByInput {
  id?: Maybe<ID_Input>;
  title: String;
  era: String;
  author: String;
  releaseDate: String;
  imageId: String;
  summary: String;
  pages: Int;
  isbn: Int;
  timeLine: String;
  series?: Maybe<String>;
  bookStatus: String;
  epochTime: String;
}

export interface UserUpdateWithoutBooksDataInput {
  name?: Maybe<String>;
  password?: Maybe<String>;
}

export interface BookUpdateManyWithWhereNestedInput {
  where: BookScalarWhereInput;
  data: BookUpdateManyDataInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface BookUpdateWithoutPostedByDataInput {
  title?: Maybe<String>;
  era?: Maybe<String>;
  author?: Maybe<String>;
  releaseDate?: Maybe<String>;
  imageId?: Maybe<String>;
  summary?: Maybe<String>;
  pages?: Maybe<Int>;
  isbn?: Maybe<Int>;
  timeLine?: Maybe<String>;
  series?: Maybe<String>;
  bookStatus?: Maybe<String>;
  epochTime?: Maybe<String>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  name?: Maybe<String>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface BookPreviousValues {
  id: ID_Output;
  dateAdded: DateTimeOutput;
  title: String;
  era: String;
  author: String;
  releaseDate: String;
  imageId: String;
  summary: String;
  pages: Int;
  isbn: Int;
  timeLine: String;
  series?: String;
  bookStatus: String;
  epochTime: String;
}

export interface BookPreviousValuesPromise
  extends Promise<BookPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  dateAdded: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  era: () => Promise<String>;
  author: () => Promise<String>;
  releaseDate: () => Promise<String>;
  imageId: () => Promise<String>;
  summary: () => Promise<String>;
  pages: () => Promise<Int>;
  isbn: () => Promise<Int>;
  timeLine: () => Promise<String>;
  series: () => Promise<String>;
  bookStatus: () => Promise<String>;
  epochTime: () => Promise<String>;
}

export interface BookPreviousValuesSubscription
  extends Promise<AsyncIterator<BookPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  dateAdded: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  era: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  releaseDate: () => Promise<AsyncIterator<String>>;
  imageId: () => Promise<AsyncIterator<String>>;
  summary: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  isbn: () => Promise<AsyncIterator<Int>>;
  timeLine: () => Promise<AsyncIterator<String>>;
  series: () => Promise<AsyncIterator<String>>;
  bookStatus: () => Promise<AsyncIterator<String>>;
  epochTime: () => Promise<AsyncIterator<String>>;
}

export interface Book {
  id: ID_Output;
  dateAdded: DateTimeOutput;
  title: String;
  era: String;
  author: String;
  releaseDate: String;
  imageId: String;
  summary: String;
  pages: Int;
  isbn: Int;
  timeLine: String;
  series?: String;
  bookStatus: String;
  epochTime: String;
}

export interface BookPromise extends Promise<Book>, Fragmentable {
  id: () => Promise<ID_Output>;
  dateAdded: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  era: () => Promise<String>;
  author: () => Promise<String>;
  releaseDate: () => Promise<String>;
  imageId: () => Promise<String>;
  summary: () => Promise<String>;
  pages: () => Promise<Int>;
  isbn: () => Promise<Int>;
  timeLine: () => Promise<String>;
  series: () => Promise<String>;
  bookStatus: () => Promise<String>;
  epochTime: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface BookSubscription
  extends Promise<AsyncIterator<Book>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  dateAdded: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  era: () => Promise<AsyncIterator<String>>;
  author: () => Promise<AsyncIterator<String>>;
  releaseDate: () => Promise<AsyncIterator<String>>;
  imageId: () => Promise<AsyncIterator<String>>;
  summary: () => Promise<AsyncIterator<String>>;
  pages: () => Promise<AsyncIterator<Int>>;
  isbn: () => Promise<AsyncIterator<Int>>;
  timeLine: () => Promise<AsyncIterator<String>>;
  series: () => Promise<AsyncIterator<String>>;
  bookStatus: () => Promise<AsyncIterator<String>>;
  epochTime: () => Promise<AsyncIterator<String>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface BookNullablePromise
  extends Promise<Book | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  dateAdded: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  era: () => Promise<String>;
  author: () => Promise<String>;
  releaseDate: () => Promise<String>;
  imageId: () => Promise<String>;
  summary: () => Promise<String>;
  pages: () => Promise<Int>;
  isbn: () => Promise<Int>;
  timeLine: () => Promise<String>;
  series: () => Promise<String>;
  bookStatus: () => Promise<String>;
  epochTime: () => Promise<String>;
  postedBy: <T = UserPromise>() => T;
}

export interface AggregateBook {
  count: Int;
}

export interface AggregateBookPromise
  extends Promise<AggregateBook>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBookSubscription
  extends Promise<AsyncIterator<AggregateBook>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BookEdge {
  node: Book;
  cursor: String;
}

export interface BookEdgePromise extends Promise<BookEdge>, Fragmentable {
  node: <T = BookPromise>() => T;
  cursor: () => Promise<String>;
}

export interface BookEdgeSubscription
  extends Promise<AsyncIterator<BookEdge>>,
    Fragmentable {
  node: <T = BookSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BookConnection {
  pageInfo: PageInfo;
  edges: BookEdge[];
}

export interface BookConnectionPromise
  extends Promise<BookConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<BookEdge>>() => T;
  aggregate: <T = AggregateBookPromise>() => T;
}

export interface BookConnectionSubscription
  extends Promise<AsyncIterator<BookConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<BookEdgeSubscription>>>() => T;
  aggregate: <T = AggregateBookSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BookSubscriptionPayload {
  mutation: MutationType;
  node: Book;
  updatedFields: String[];
  previousValues: BookPreviousValues;
}

export interface BookSubscriptionPayloadPromise
  extends Promise<BookSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = BookPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BookPreviousValuesPromise>() => T;
}

export interface BookSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BookSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BookSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BookPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  books: <T = Promise<AsyncIterator<BookSubscription>>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  books: <T = FragmentableArray<Book>>(args?: {
    where?: BookWhereInput;
    orderBy?: BookOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Book",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
