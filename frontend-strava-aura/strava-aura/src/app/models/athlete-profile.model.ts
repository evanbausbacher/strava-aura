export interface IAthleteProfile {
    id : number;
    resource_state : number;
    firstname : string;
    lastname : string;
    bio : string;
    city : string;
    state : string;
    country : string;
    sex : string;
    premium : boolean;
    summit : boolean;
    created_at : Date;
    updated_at : Date;
    badge_type_id : number;
    weight : number;
    profile_medium : string;
    profile : string;
}