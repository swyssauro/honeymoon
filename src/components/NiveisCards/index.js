import React from 'react'
import { Card } from 'semantic-ui-react'

import './styles.css';

const items = [
    {
        header: 'Lua Sangrenta',
        meta: '@🌺 Akatsuki 暁',
    },
    {
        header: 'Lua Azul',
        meta: '@🌺 Aotsuki 青月',
    },
    {
        header: 'Eclipse Lunar',
        meta: '@🌺 Shoku 月食',
    },
    {
        header: 'Lua Crescente',
        meta: '@🌺 Jougengetsu 上弦月',
    },
    {
        header: 'Lua Nova',
        meta: '@🌺 Shingetsu 親月',
    },
    {
        header: 'Lua Minguante',
        meta: '@🌺 Kagentsu 下弦月',
    },
    {
        header: 'Lua Cheia',
        meta: '@🌺 Mangetsu 満月',
    },
    {
        header: 'Lua',
        meta: '@🌺 Tsuki 月',
    },
    {
        header: 'Fases',
        meta: '@🌺 Gessou 月相',
    },
]

const CardExampleGroupCentered = () => <Card.Group centered items={items} />

export default CardExampleGroupCentered