import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';


export const search = (req: Request, res: Response) =>{
    //let query: string = req.query.q as string;
    const query = (req.query.q as string) || '';

    if(!query.trim()){
        res.redirect('/');
        return;
    }

    //let list = Pet.getfromName(query);
    const list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });
}

