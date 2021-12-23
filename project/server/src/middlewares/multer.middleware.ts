import { Request } from "express";
import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";

const storage = multer.diskStorage({
  destination: function (_req: Request, _file, cb) {
    cb(null, path.join(__dirname, "../files"));
  },
  filename: function (_req: Request, _file, cb) {
    cb(null, uuid());
  },
});

const upload = multer({ storage: storage });

export default upload;
