import React, { ReactNode } from 'react';

interface ProjectLayoutProps {
    children: ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
    return (
        <section className="max-w-5xl mx-auto p-8">
            <header>
                <h1 className="text-3xl font-bold mb-6">Projects</h1>
            </header>
            <main>
                {children}
            </main>
        </section>
    );
}