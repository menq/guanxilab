/* tslint:disable:variable-name */
import { AuthenticationError } from "apollo-server-errors";
import {
  Arg,
  Args,
  ArgsType,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query
} from "type-graphql";
import { THuman, TInteraction } from "../../types/human";
import { Context } from "../api-gateway";

@InputType()
class CreateContactInput implements THuman {
  @Field(_ => String, { nullable: true })
  public _id?: string | undefined;

  @Field(_ => String, { nullable: true })
  public emails: Array<string>;
  @Field(_ => String, { nullable: true })
  public name: string;
  @Field(_ => String, { nullable: true })
  public avatarUrl: string;
  @Field(_ => String, { nullable: true })
  public address: string;
  @Field(_ => String, { nullable: true })
  public bornAt: string;
  @Field(_ => String, { nullable: true })
  public bornAddress: string;
  @Field(_ => Date, { nullable: true })
  public knownAt: Date;
  @Field(_ => String, { nullable: true })
  public knownSource: string;
  @Field(_ => String, { nullable: true })
  public extraversionIntroversion:
    | ""
    | "introversion"
    | "extroversion"
    | "ambiversion";
  @Field(_ => String, { nullable: true })
  public intuitingSensing: "" | "intuiting" | "sensing";
  @Field(_ => String, { nullable: true })
  public thinkingFeeling: "" | "thinking" | "feeling";
  @Field(_ => String, { nullable: true })
  public planingPerceiving: "" | "planing" | "perceiving";
  @Field(_ => String, { nullable: true })
  public tdp: "" | "creator" | "refiner" | "advancer" | "executor" | "flexor";
  @Field(_ => Number, { nullable: true })
  public inboundTrust: number;
  @Field(_ => Number, { nullable: true })
  public outboundTrust: number;
  @Field(_ => String, { nullable: true })
  public blurb: string;
  @Field(_ => String, { nullable: true })
  public workingOn: string;
  @Field(_ => String, { nullable: true })
  public desire: string;
  @Field(_ => String, { nullable: true })
  public title: string;
  @Field(_ => [ExperienceInput])
  public experience: [ExperienceInput];
  @Field(_ => [ExperienceInput])
  public education: [ExperienceInput];
  @Field(_ => String, { nullable: true })
  public linkedin: string;
  @Field(_ => String, { nullable: true })
  public facebook: string;
  @Field(_ => Date, { nullable: true })
  public createAt?: Date;
  @Field(_ => Date, { nullable: true })
  public updateAt?: Date;
}

@InputType()
class UpdateContactInput implements THuman {
  @Field(_ => String)
  public _id: string;

  @Field(_ => String, { nullable: true })
  public emails: Array<string>;
  @Field(_ => String, { nullable: true })
  public name: string;
  @Field(_ => String, { nullable: true })
  public avatarUrl: string;
  @Field(_ => String, { nullable: true })
  public address: string;
  @Field(_ => Date, { nullable: true })
  public bornAt: string;
  @Field(_ => String, { nullable: true })
  public bornAddress: string;
  @Field(_ => Date, { nullable: true })
  public knownAt: Date;
  @Field(_ => String, { nullable: true })
  public knownSource: string;
  @Field(_ => String, { nullable: true })
  public extraversionIntroversion:
    | ""
    | "introversion"
    | "extroversion"
    | "ambiversion";
  @Field(_ => String, { nullable: true })
  public intuitingSensing: "" | "intuiting" | "sensing";
  @Field(_ => String, { nullable: true })
  public thinkingFeeling: "" | "thinking" | "feeling";
  @Field(_ => String, { nullable: true })
  public planingPerceiving: "" | "planing" | "perceiving";
  @Field(_ => String, { nullable: true })
  public tdp: "" | "creator" | "refiner" | "advancer" | "executor" | "flexor";
  @Field(_ => Number, { nullable: true })
  public inboundTrust: number;
  @Field(_ => Number, { nullable: true })
  public outboundTrust: number;
  @Field(_ => String, { nullable: true })
  public blurb: string;
  @Field(_ => String, { nullable: true })
  public workingOn: string;
  @Field(_ => String, { nullable: true })
  public desire: string;
  @Field(_ => String, { nullable: true })
  public title: string;
  @Field(_ => [ExperienceInput])
  public experience: [ExperienceInput];
  @Field(_ => [ExperienceInput])
  public education: [ExperienceInput];
  @Field(_ => String, { nullable: true })
  public linkedin: string;
  @Field(_ => String, { nullable: true })
  public facebook: string;
  @Field(_ => Date, { nullable: true })
  public createAt?: Date;
  @Field(_ => Date, { nullable: true })
  public updateAt?: Date;
}

@ObjectType()
class Contact implements THuman {
  @Field(_ => String)
  // tslint:disable-next-line:variable-name
  public _id: string;

  @Field(_ => String, { nullable: true })
  public emails: Array<string>;
  @Field(_ => String, { nullable: true })
  public name: string;
  @Field(_ => String, { nullable: true })
  public avatarUrl: string;
  @Field(_ => String, { nullable: true })
  public address: string;
  @Field(_ => Date, { nullable: true })
  public bornAt: string;
  @Field(_ => String, { nullable: true })
  public bornAddress: string;
  @Field(_ => Date, { nullable: true })
  public knownAt: Date;
  @Field(_ => String, { nullable: true })
  public knownSource: string;
  @Field(_ => String, { nullable: true })
  public extraversionIntroversion:
    | ""
    | "introversion"
    | "extroversion"
    | "ambiversion";
  @Field(_ => String, { nullable: true })
  public intuitingSensing: "" | "intuiting" | "sensing";
  @Field(_ => String, { nullable: true })
  public thinkingFeeling: "" | "thinking" | "feeling";
  @Field(_ => String, { nullable: true })
  public planingPerceiving: "" | "planing" | "perceiving";
  @Field(_ => String, { nullable: true })
  public tdp: "" | "creator" | "refiner" | "advancer" | "executor" | "flexor";
  @Field(_ => Number, { nullable: true })
  public inboundTrust: number;
  @Field(_ => Number, { nullable: true })
  public outboundTrust: number;
  @Field(_ => String, { nullable: true })
  public blurb: string;
  @Field(_ => String, { nullable: true })
  public workingOn: string;
  @Field(_ => String, { nullable: true })
  public desire: string;
  @Field(_ => String, { nullable: true })
  public title: string;
  @Field(_ => [Experience])
  public experience: [Experience];
  @Field(_ => [Experience])
  public education: [Experience];
  @Field(_ => String, { nullable: true })
  public linkedin: string;
  @Field(_ => String, { nullable: true })
  public facebook: string;
  @Field(_ => Date, { nullable: true })
  public createAt?: Date;
  @Field(_ => Date, { nullable: true })
  public updateAt?: Date;
}

@ObjectType()
class Experience {
  @Field(_ => String, { nullable: true })
  public title: string;
  @Field(_ => String, { nullable: true })
  public name: string;
}

@InputType()
class ExperienceInput {
  @Field(_ => String, { nullable: true })
  public title: string;
  @Field(_ => String, { nullable: true })
  public name: string;
}

@ObjectType()
class Interaction implements TInteraction {
  @Field(_ => String)
  public id: string;
  @Field(_ => Date)
  public timestamp: Date;
  @Field(_ => String)
  public content: string;
  @Field(_ => String, { nullable: true })
  public contentHtml: string;
}

@ArgsType()
class GetInteractions {
  @Field(_ => String, { nullable: true })
  public contactId: string;

  @Field(_ => Number, { nullable: true })
  public offset?: number;

  @Field(_ => Number, { nullable: true })
  public limit?: number;
}

@ArgsType()
class SearchRequest {
  @Field(_ => String)
  public name: string;
}

@ArgsType()
class ContactsRequest {
  @Field(_ => String)
  public id: string;
}

interface ISearchResult {}

@ObjectType()
class SearchResult implements ISearchResult {
  @Field(_ => String)
  public name: string;

  @Field(_ => String)
  public path: string;
}

export class ContactResolver {
  @Mutation(_ => Contact)
  public async createContact(
    @Arg("createContactInput") createContactInput: CreateContactInput,
    @Ctx() { model, userId }: Context
  ): Promise<Contact> {
    if (!userId) {
      throw new AuthenticationError(`please login to createContact`);
    }

    return model.human.newAndSave({ ...createContactInput, ownerId: userId });
  }

  @Mutation(_ => Contact)
  public async updateContact(
    @Arg("updateContactInput") updateContactInput: UpdateContactInput,
    @Ctx() { model, userId }: Context
  ): Promise<Contact | null> {
    if (!userId) {
      throw new AuthenticationError(`please login to fetch personal notes`);
    }

    return model.human.updateOne(
      updateContactInput._id,
      userId,
      updateContactInput
    );
  }

  @Query(_ => [Interaction])
  public async interactions(
    @Args() { contactId, offset, limit }: GetInteractions,
    @Ctx() { model, userId }: Context
  ): Promise<Array<Interaction>> {
    if (!userId) {
      throw new AuthenticationError(`please login to fetch interactions`);
    }

    return model.event.getAllByOwnerIdRelatedHumanId({
      ownerId: userId,
      humanId: contactId,
      skip: offset,
      limit
    });
  }

  @Query(_ => [SearchResult])
  public async search(
    @Args() { name }: SearchRequest,
    @Ctx() { model, userId }: Context
  ): Promise<Array<SearchResult>> {
    if (!userId) {
      throw new AuthenticationError(`please login to search`);
    }
    const entries = await model.contact.findName({ name, ownerId: userId });
    return entries.map(en => ({
      name: en.name,
      path: `/${en._id}/`
    }));
  }

  @Query(_ => [Contact], { nullable: true })
  public async contacts(
    @Args() { id }: ContactsRequest,
    @Ctx() { model, userId }: Context
  ): Promise<Array<Contact | null>> {
    if (!userId) {
      throw new AuthenticationError(`please login to fetch contacts`);
    }
    return [await model.contact.getById(userId, id)];
  }
}
