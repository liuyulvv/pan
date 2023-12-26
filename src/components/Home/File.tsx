import Http from '@/utils/Http';
import { FileInfo, FileInfoResponse } from '@/utils/Interface';
import { timestampSecondToDate } from '@/utils/Time';
import {
    Table,
    TableBody,
    TableCell,
    TableCellLayout,
    TableHeader,
    TableHeaderCell,
    TableRow,
    makeStyles
} from '@fluentui/react-components';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        flexShrink: '1'
    }
});

export default () => {
    const [items, setItems] = useState<FileInfo[]>([]);
    const styles = useStyles();

    const columns = [
        { columnKey: 'filename', label: '文件名' },
        { columnKey: 'update', label: '修改时间' },
        { columnKey: 'type', label: '类型' },
        { columnKey: 'size', label: '大小' }
    ];

    useEffect(() => {
        const params = new Map<string, string>([['method', 'list']]);
        Http.get('rest/2.0/xpan/file', params).then((res) => {
            const data = res.data as FileInfoResponse;
            if (!data.errno) {
                setItems(data.list);
            }
        });
    });

    return (
        <div className={styles.main}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.fs_id}>
                            <TableCell>
                                <TableCellLayout>{item.server_filename}</TableCellLayout>
                            </TableCell>
                            <TableCell>
                                <TableCellLayout>{timestampSecondToDate(item.server_mtime)}</TableCellLayout>
                            </TableCell>
                            <TableCell>{item.isdir == 1 ? '目录' : '文件'}</TableCell>
                            <TableCell>
                                <TableCellLayout>{item.size}</TableCellLayout>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
