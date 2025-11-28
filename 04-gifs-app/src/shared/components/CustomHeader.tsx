interface Props {
    title: string;
    description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1 data-testid={title}>{title}</h1>
                {description &&
                    <p>{description}</p>
                }
            </div>
        </>
    )
}
