import { PendingBadge, ClosedBadge } from '../typography/Badge';
import classes from './MetricCard.module.css';

export default function MetricCard({ title, value, status, sourceLabel }) {
    return (
        <div className={`glass-panel ${classes.card}`}>
            <div className={classes.header}>
                <h4 className={classes.title}>{title}</h4>
                {status === 'closed' ? <ClosedBadge /> : <PendingBadge />}
            </div>
            <div className={classes.value}>{value}</div>
            {sourceLabel && (
                <div className={classes.source}>
                    <span>{sourceLabel}</span>
                </div>
            )}
        </div>
    );
}
