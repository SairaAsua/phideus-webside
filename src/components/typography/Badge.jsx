import classes from './Badge.module.css';

export function ClosedBadge() {
    return (
        <span className={`${classes.badge} ${classes.closed}`}>
            CLOSED
        </span>
    );
}

export function PendingBadge() {
    return (
        <span className={`${classes.badge} ${classes.pending}`} title="Pending Validation">
            PENDING VALIDATION
        </span>
    );
}
