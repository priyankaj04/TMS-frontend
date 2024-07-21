import React, { useState } from "react";
import { motion } from "framer-motion";
import Board from "./Board";

function Kanban() {
    return (
        <div className="h-screen w-full bg-neutral-900 text-neutral-200">
            <Board />
        </div>
    );

}

export default Kanban;