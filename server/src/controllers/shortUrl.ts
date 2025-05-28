import express from 'express';
import { urlModel } from '../model/shortUrl';

export const createUrl = async (req: express.Request, res: express.Response) => {
        try {
                console.log('fullUrl :', req.body.fullUrl);
                const { fullUrl } = req.body;
                const urlFound = await urlModel.find({ fullUrl });
                if (urlFound.length < 0) {
                        res.status(409).send(urlFound);
                } else {
                        const shortUrl = await urlModel.create({ fullUrl });
                        res.status(201).send({ message: 'create short Url' });
                }
        } catch (error) {
                res.status(500).send({ message: 'Error while createUrl' });
        }
};

export const getAllUrl = async (req: express.Request, res: express.Response) => {
        try {
                const shortUrls = await urlModel.find();
                if (shortUrls.length < 0) {
                        res.status(404).send({ message: 'No url present' });
                } else {
                        res.status(200).send(shortUrls);
                }
        } catch (error) {
                res.status(500).send({ message: 'Error while getAllUser' });
        }
};
export const getUrl = async (req: express.Request, res: express.Response) => {
        try {
                const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
                if (!shortUrl) {
                        res.status(404).send({ message: 'url not found' });
                } else {
                        shortUrl.clicks++; //this is will keep the note of the click on the short url in the frontend
                        shortUrl.save(); //Save the clicks
                        res.redirect(`${shortUrl.fullUrl}`); //redirect the click on the shorturl to the full url
                }
        } catch (error) {
                res.status(500).send({ message: 'Error while getUrl' });
        }
};
export const deleteUrl = async (req: express.Request, res: express.Response) => {
        try {
                const shortUrl = await urlModel.findById({ _id: req.params.id });
                if (shortUrl) {
                        res.status(203).send({ message: 'url delted successfully!!' });
                }
        } catch (error) {
                res.status(500).send({ message: 'Error while deleteUrl' });
        }
};
