import type { FC } from 'react';
import { Button } from '@gravx/ui';

const Item: FC = () => <Button onClick={() => console.log('Click!')}>Item 1</Button>;

export default Item;
