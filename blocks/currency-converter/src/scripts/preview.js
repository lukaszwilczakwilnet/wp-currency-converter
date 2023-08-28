import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	TextControl,
	SelectControl,
	Flex,
	FlexItem,
	FlexBlock,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	__experimentalText as Text,
} from '@wordpress/components';
import '../styles/editor.scss';

export default function Preview({
	defaultCurrencyTop,
	defaultCurrencyBottom,
	currencies,
	pluginConfigured,
}) {
	const siteUrl = useSelect((select) => {
		const settings = select('core').getEntityRecord('root', 'site');
		return settings?.url;
	}, []);

	return (
		<Card {...useBlockProps()}>
			{pluginConfigured && (
				<CardHeader>
					<p>
						1 {defaultCurrencyTop}{' '}
						{__('equals', 'currency-converter')}
					</p>
					<p className={'result'}>0.91 {defaultCurrencyBottom}</p>
				</CardHeader>
			)}
			<CardBody>
				{pluginConfigured && (
					<Flex>
						<FlexItem>
							<TextControl value={1} disabled />
						</FlexItem>
						<FlexBlock>
							<SelectControl
								value={defaultCurrencyTop}
								options={currencies}
								disabled
							/>
						</FlexBlock>
					</Flex>
				)}
				{pluginConfigured && (
					<Flex>
						<FlexItem>
							<TextControl value={0.91} disabled />
						</FlexItem>
						<FlexBlock>
							<SelectControl
								value={defaultCurrencyBottom}
								options={currencies}
								disabled
							/>
						</FlexBlock>
					</Flex>
				)}
				{!pluginConfigured && (
					<Text size={14}>
						Please configure plugin first.{' '}
						<a
							target={'_blank'}
							href={
								siteUrl +
								'/wp-admin/admin.php?page=currency-converter'
							}
						>
							Go to settings page.
						</a>
					</Text>
				)}
			</CardBody>
			<CardFooter>
				<Text size={10} color={'red'}>
					In editor's preview currency rates are not calculated.
				</Text>
			</CardFooter>
		</Card>
	);
}
