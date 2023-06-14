import request from 'supertest'; 
import { App } from '@/app'; 
import { CardsRoute } from '@routes/cards.route'; 
import { PokemonCard } from '@/interfaces/cards.interface';
import { ClientSession } from 'mongodb';
import { Document, Model, DocumentSetOptions, QueryOptions, Callback, UpdateQuery, AnyObject, PopulateOptions, MergeType, Query, SaveOptions, LeanDocument, ToObjectOptions, FlattenMaps, Require_id, UpdateWithAggregationPipeline, PathsToValidate, CallbackWithoutResult, pathsToSkip, Error, Connection } from 'mongoose';
import { PriceHistoryData } from '@/interfaces/priceHistory.interface';
import { CreateCardDto } from '@/dtos/cards.dto';
import { CreatePriceHistoryDto } from '@/dtos/priceHistory.dto';

afterAll(async () => {
    await new Promise<void>(resolve => setTimeout(() => resolve(), 500)); 
}); 

describe('Testing Cards Routes', () => {
    describe('[POST] /', () => {
        it('response statusCode 200, and creates new card', async () => {
            const cardsRoute = new CardsRoute(); 
            const app = new App([cardsRoute]); 

            const result = await request(app.getServer()).get(`${cardsRoute.path}`); 
            console.log(result); 
            debugger; 

            //.post
            //.send
            // todo: supertest post request example
        });
    });

    describe('[POST] /', () => {
        it('response Create Card', async () => {
            const cardsRoute = new CardsRoute(); 
            const app = new App([cardsRoute]); 

            // const priceHistoryPostData : PriceHistoryData = {
            //     date: new Date(1, 2, 3),
            //     quantity: 1,
            //     price: 1,
                
            // }

            // const cardPostData : PokemonCard = {
            //     name: 'Pikachu',
            //     description: 'Electric Type',
            //     salePrice: 1,
            //     marketPrice: 1,
            //     rating: [],
            //     image: '',
            //     priceHistory: [],
                
            // }

            // const priceHistoryData: CreatePriceHistoryDto = {
            //     date: new Date(2023, 6, 13), 
            //     quantity: 1, 
            //     price: 1
            // }

            const cardData: CreateCardDto = {
                name: 'Pikachu',
                description: 'Electric Type',
                salePrice: 1,
                marketPrice: 1,
                rating: [],
                image: 'a',
                priceHistory: [],
            }



            /**
             * Request method creates new HTTP request that's used to send requests
             * Post method creates post request to specified path
             * Send method sends the cardPostData to the post request
             */
            const response = await request(app.getServer())
                .post(`${cardsRoute.path}`)
                .send(cardData); 
                

            expect(response.body.data.name).toBe(cardData.name);

            debugger; 

        });
    });

})

describe('Testing post', () => {

})


