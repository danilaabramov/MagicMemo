import React from "react";
import { Button } from "@/components/ui/button"
import {ArrowRight} from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Ваши идеи, документы и планы. Единый. Добро пожаловать в <span className="underline">MagicMemo</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                MagicMemo - это подключенное рабочее пространство, где <br/>
                работа выполняется лучше и быстрее.
            </h3>
            <Button>
                Войти в MagicMemo
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}