import React from 'react';
import { ClosedBadge } from '../typography/Badge';
import classes from './DescriptorTable.module.css';

// Data from Para_Sai/04_DESCRIPTOR_TABLE_5EP_COMPLETE.md
const tableData = [
    { rank: 1, arm: 'd4a4', family: 'Dual (MIDI+Audio)', mechanism: 'concat', bestS: '69.8%', a2m: '69.8%', m2a: '70.6%', hardNeg: '91.6%', delta: '+9.6pp', gate: '4.3' },
    { rank: 2, arm: 'a4r', family: 'Audio (log-freq)', mechanism: 'reverse cross-att', bestS: '68.6%', a2m: '68.6%', m2a: '69.0%', hardNeg: '91.6%', delta: '+8.4pp', gate: '4.3-F5' },
    { rank: 3, arm: 't3-wt', family: 'Third Tower', mechanism: 'weighted bridge', bestS: '67.6%', a2m: '71.4%', m2a: '67.6%', hardNeg: '91.2%', delta: '+7.4pp', gate: '4.4' },
    { rank: 4, arm: 't3-tri', family: 'Third Tower', mechanism: 'trilinear bridge', bestS: '65.0%', a2m: '65.4%', m2a: '65.0%', hardNeg: '90.6%', delta: '+4.8pp', gate: '4.4' },
    { rank: 5, arm: 'd4r', family: 'MIDI (intervals)', mechanism: 'reverse cross-att', bestS: '64.2%', a2m: '64.2%', m2a: '64.4%', hardNeg: '93.2%', delta: '+4.0pp', gate: '4.3-F5' },
    { rank: 6, arm: 'D4', family: 'MIDI (intervals)', mechanism: 'concat', bestS: '63.6%', a2m: '63.6%', m2a: '64.4%', hardNeg: '91.2%', delta: '+3.4pp', gate: '4.3' },
    { rank: 7, arm: 'A4', family: 'Audio (log-freq)', mechanism: 'concat', bestS: '63.6%', a2m: '65.8%', m2a: '63.6%', hardNeg: '92.4%', delta: '+3.4pp', gate: '4.3' },
    { rank: 8, arm: 'A4x', family: 'Audio (log-freq)', mechanism: 'cross-att', bestS: '62.6%', a2m: '64.0%', m2a: '62.6%', hardNeg: '92.4%', delta: '+2.4pp', gate: '4.3' },
    { rank: 9, arm: 'A7x', family: 'Audio (attractor)', mechanism: 'cross-att', bestS: '62.2%', a2m: '62.2%', m2a: '63.8%', hardNeg: '92.0%', delta: '+2.0pp', gate: '4.3' },
    { rank: 10, arm: 'D0', family: 'Baseline', mechanism: 'no descriptor', bestS: '60.2%', a2m: '60.4%', m2a: '60.2%', hardNeg: '90.0%', delta: '0.0pp', gate: '4.3' },
    { rank: 11, arm: 'moe-a4-v2', family: 'MoE v2', mechanism: 'non-zero init + noise decay', bestS: '60.2%', a2m: '60.4%', m2a: '60.2%', hardNeg: '90.8%', delta: '+0.0pp', gate: '4.4-MoE' },
    { rank: 12, arm: 'D4x', family: 'MIDI (intervals)', mechanism: 'cross-att', bestS: '60.0%', a2m: '60.0%', m2a: '60.4%', hardNeg: '91.4%', delta: '-0.2pp', gate: '4.3' },
    { rank: 13, arm: 'moe-a4-v4', family: 'MoE v4', mechanism: 'top-1 hard gating', bestS: '59.4%', a2m: '60.6%', m2a: '59.4%', hardNeg: '91.2%', delta: '-0.8pp', gate: '4.4-MoE' },
    { rank: 14, arm: 'film-dual', family: 'FiLM', mechanism: 'dual modulation', bestS: '59.4%', a2m: '60.2%', m2a: '59.4%', hardNeg: '91.4%', delta: '-0.8pp', gate: '4.4' },
    { rank: 15, arm: 'film-a4', family: 'FiLM', mechanism: 'audio modulation', bestS: '59.2%', a2m: '60.8%', m2a: '59.2%', hardNeg: '89.8%', delta: '-1.0pp', gate: '4.4' },
    { rank: 16, arm: 'moe-dual', family: 'MoE', mechanism: 'dual expert routing', bestS: '59.2%', a2m: '61.2%', m2a: '59.2%', hardNeg: '91.6%', delta: '-1.0pp', gate: '4.4' },
    { rank: 17, arm: 'moe-a4-v3', family: 'MoE v3', mechanism: 'entropy-regularized routing', bestS: '59.2%', a2m: '60.6%', m2a: '59.2%', hardNeg: '91.2%', delta: '-1.0pp', gate: '4.4-MoE' },
    { rank: 18, arm: 'a9', family: 'Audio (IDF attractor)', mechanism: 'concat', bestS: '58.8%', a2m: '58.8%', m2a: '60.8%', hardNeg: '90.4%', delta: '-1.4pp', gate: '4.3-F5' },
    { rank: 19, arm: 'A7', family: 'Audio (attractor)', mechanism: 'concat', bestS: '58.8%', a2m: '60.2%', m2a: '58.8%', hardNeg: '90.2%', delta: '-1.4pp', gate: '4.3' },
    { rank: 20, arm: 'film-d4', family: 'FiLM', mechanism: 'MIDI modulation', bestS: '58.6%', a2m: '61.0%', m2a: '58.6%', hardNeg: '91.8%', delta: '-1.6pp', gate: '4.4' },
    { rank: 21, arm: 'moe-a4', family: 'MoE', mechanism: 'expert routing', bestS: '58.2%', a2m: '58.8%', m2a: '60.2%', hardNeg: '89.6%', delta: '-2.0pp', gate: '4.4' },
    { rank: 22, arm: 'a8', family: 'Audio (onset-chroma)', mechanism: 'concat', bestS: '57.4%', a2m: '60.4%', m2a: '57.4%', hardNeg: '90.6%', delta: '-2.8pp', gate: '4.3-F5' },
    { rank: 23, arm: 'd4a4cm', family: 'Dual (cross-modal)', mechanism: 'concat', bestS: '52.4%', a2m: '52.4%', m2a: '56.6%', hardNeg: '89.6%', delta: '-7.8pp', gate: '4.3' },
    { rank: 24, arm: 't3-anc', family: 'Third Tower', mechanism: 'anchor bridge', bestS: '42.2%', a2m: '42.2%', m2a: '42.2%', hardNeg: '89.4%', delta: '-18.0pp', gate: '4.4' },
];

export default function DescriptorTable() {
    return (
        <div className={classes.tableContainer}>
            <div className={classes.tableHeader}>
                <h3>Full 5-Epoch Descriptor Comparison (24 Arms)</h3>
                <ClosedBadge />
            </div>
            <div className={classes.scrollWrapper}>
                <table className={classes.dataTable}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Arm</th>
                            <th>Family</th>
                            <th>Mechanism</th>
                            <th>Best S</th>
                            <th>A2M</th>
                            <th>M2A</th>
                            <th>Hard Neg</th>
                            <th>Delta vs D0</th>
                            <th>Gate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.rank} className={row.arm === 'D0' ? classes.baselineRow : ''}>
                                <td>{row.rank}</td>
                                <td className={classes.mono}>{row.arm}</td>
                                <td>{row.family}</td>
                                <td>{row.mechanism}</td>
                                <td className={classes.highlight}>{row.bestS}</td>
                                <td>{row.a2m}</td>
                                <td>{row.m2a}</td>
                                <td>{row.hardNeg}</td>
                                <td className={row.delta.startsWith('+') ? classes.positive : classes.negative}>
                                    {row.delta}
                                </td>
                                <td className={classes.mono}>{row.gate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
