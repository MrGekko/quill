import {BlockEmbed} from '../blots/block';

class HorizontalRule extends BlockEmbed {
  static create(value) {
    return super.create(value);
  }

}

HorizontalRule.blotName  = 'horizontal-rule';
HorizontalRule.className = 'page-split';
HorizontalRule.tagName   = 'hr';

export default HorizontalRule;
