export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="p-6 bg-amber-200 text-amber-500">
            {children}
        </div>
    );
}