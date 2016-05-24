import {Resource} from "../core/resource/resource";
import {HeroAdapter} from "./hero.adapter";
import {HeroParser} from "./hero.parser";
import {HeroFormatter} from "./hero.formatter";
import * as HeroesData from "./hero.data";
import {IJsonSchema} from "../core/resource/schema";

const formatter = new HeroFormatter();
const parser = new HeroParser();
const adapter = new HeroAdapter(formatter, parser);

const heroesSchema: IJsonSchema = <IJsonSchema> HeroesData.schema;

export const resource = new Resource(heroesSchema, adapter);
