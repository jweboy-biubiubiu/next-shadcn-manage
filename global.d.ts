type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface BaseComponentProps {
  children?: React.ReactElement;
  params?: Record<string, any>;
}

type Option = {
  label: string;
  value: string;
};

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_API_URL: string;
  }
}
