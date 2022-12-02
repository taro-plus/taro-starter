import { Cell, CellGroup } from '@antmjs/vantui';
import { View } from '@tarojs/components';
import type { FC } from 'react';

const Index: FC = () => {
  return (
    <View>
      <CellGroup>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" border={false} />
      </CellGroup>
    </View>
  );
};

export default Index;
