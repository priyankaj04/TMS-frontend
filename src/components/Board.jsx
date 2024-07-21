import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Column from './Column';
import BurnBarrel from './BurnBarrel';
import { SearchTasks } from '../Api';

const Board = () => {
    const DEFAULT_CARDS = [
        // BACKLOG
        { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
        { title: "SOX compliance checklist", id: "2", column: "backlog" },
        { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
        { title: "Document Notifications service", id: "4", column: "backlog" },
        // TODO
        {
            title: "Research DB options for new microservice",
            id: "5",
            column: "todo",
        },
        { title: "Postmortem for outage", id: "6", column: "todo" },
        { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

        // DOING
        {
            title: "Refactor context providers to use Zustand",
            id: "8",
            column: "doing",
        },
        { title: "Add logging to daily CRON", id: "9", column: "doing" },
        // DONE
        {
            title: "Set up DD dashboards for Lambda listener",
            id: "10",
            column: "done",
        },
    ];

    const [cards, setCards] = useState(DEFAULT_CARDS);
    const [fetch, setFetch] = useState(false)

    useEffect(() => {
        SearchTasks().then((res) => {
            if (res.status) {
                setCards(res.data);
            } else {
                setCards([])
            }
        })
    }, [fetch])

    return (
        <div className="flex h-full w-full gap-5 overflow-scroll p-12">
            <Column
                title="Backlog"
                column="backlog"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
                setFetch={setFetch}
            />
            <Column
                title="TODO"
                column="todo"
                headingColor="text-yellow-200"
                cards={cards}
                setCards={setCards}
                setFetch={setFetch}
            />
            <Column
                title="In progress"
                column="doing"
                headingColor="text-blue-300"
                cards={cards}
                setCards={setCards}
                setFetch={setFetch}
            />
            <Column
                title="Complete"
                column="done"
                headingColor="text-emerald-200"
                cards={cards}
                setCards={setCards}
                setFetch={setFetch}
            />
            <BurnBarrel setCards={setCards} setFetch={setFetch} />
        </div>
    );

};

export default Board;