import { Spinner, Stack, StackProps } from "@chakra-ui/react"

interface PrimaryLoaderProps extends StackProps {
    color?: string
}
export const PrimaryLoader: React.FC<PrimaryLoaderProps> = ({
    color = 'teal',
    children,
    ...rest
}) => {
    return (
        <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            height={'365px'}
            {...rest}
        >
            {children ?? (
                <div>
                    <Spinner color={color} />
                </div>
            )}
        </Stack>
    )
}