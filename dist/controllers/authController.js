"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const authService_1 = require("../services/authService");
//const { generarJWT } = require('../helpers/generar-jwt');
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = yield (0, authService_1.loginUserService)(req, res);
    try {
        res.status(200).json({
            data: resp
        });
    }
    catch (error) {
        return res.status(401).json({
            msj: 'Algo salio mal'
        });
    }
});
exports.loginUser = loginUser;
//# sourceMappingURL=authController.js.map