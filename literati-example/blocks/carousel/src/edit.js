/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';

/**
 * 
 * Import custom Carousel Components
 */
import Carousel from './Components/Carousel';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { transitionSpeed } = attributes; // Defaults to 3000 from block.json

	// Retrieves published Promotion posts. per_page can also be customized based on user input, for now it is set to 10.
	const { hasResolved, records } = useEntityRecords( 'postType', 'promotion', { per_page: 10, _embed: true });

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Settings', 'literati-example' ) }>
					<TextControl
						required='true'
						type='number'
						label={ __( 'Transition Speed ( Milliseconds )', 'literati-example' ) }
						value={ transitionSpeed }
						onChange={ 
							( value ) => setAttributes( { transitionSpeed: parseInt( value ) } )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<Carousel hasResolved={ hasResolved } posts={ records } transitionSpeed={ transitionSpeed } />
			</div>
		</>
	);

}