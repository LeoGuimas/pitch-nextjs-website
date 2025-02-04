'use client';

export default function GlobalError({
    error,
}: {
    error: Error & { digest?: string };
}) {
    return (
        <div>
            <h1>Global Error!</h1>
            <p>{error.message}</p>
            <p>{error.stack}</p>
            <p>{error.digest}</p>
        </div>
    )
}