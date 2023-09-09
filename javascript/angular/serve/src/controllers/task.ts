import { Request, Response } from 'express';
import Model from '../models/files';
import path from 'path';
import fs from 'fs-extra';

const processData = (body: any, file: string): void => {
    const newTask = {
        name: body.name,
        title: body.title,
        description: body.description,
        file: file,
        date: new Date(),
        status: false
    }
    const ModelTask = new Model(newTask);
    ModelTask.save().then(data => {
        console.log(data)
    })
}

const deleteLocalImage = (id: string): void => {
    fs.unlink(path.resolve(id))
}

export const newTask = async (req: Request, res: Response): Promise<Response> => {
    await processData(req.body, req.file.path)
    return res.json({
        message: 'successfully saved',
    })
}

export const getTaskId = (req: Request, res: Response): Response => {
    let idTask: any = null;
    Model.findById(req.params.id).then(data => {
        idTask = data
    }).catch(err => {
        idTask = { message: 'error' }
    });
    return res.json(idTask);
}

export const deleteIdTask = (req: Request, res: Response): Response => {
    let resultData: any = null;
    Model.findByIdAndRemove(req.params.id).then(data => {
        if (data) deleteLocalImage(data.file);
        resultData = {
            message: 'task deleted',
            dataResult: Model.find(),
        }
    }).catch(err => {
        resultData = { message: 'error' }
    });
    return res.json(resultData);
}

export const task = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await Model.find()
    return res.json(tasks)
}

export const updateTask = async (req: Request, res: Response): Promise<Response> => {
    let update = req.body.status
    await Model.findByIdAndUpdate({ _id: req.params.id }, { status: update,})
    return res.json({
        message: 'task updated'
    });
}