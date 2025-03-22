import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type BlockHeaderType = {
  type?: 'blockheader01' | 'blockheader02' | 'blockheader03' | 'blockheader04' | 'none'
  blockHeader?: {
    type: 'blockheader01' | 'blockheader02' | 'blockheader03' | 'blockheader04'
    richText?: SerializedEditorState
    richTextStandard?: SerializedEditorState
    richTextWithStyledList?: SerializedEditorState
    badge?: any
    links?: any
  }
}

export type BlockHeaderProps = {
  richText?: SerializedEditorState
  richTextStandard?: SerializedEditorState
  richTextWithStyledList?: SerializedEditorState
  links?: any
  badge?: any
}
