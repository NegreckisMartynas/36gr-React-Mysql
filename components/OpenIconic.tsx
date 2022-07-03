type OpenIconicProps = {
    className?: string | undefined,
    name: keyof typeof OpenIconicNames,
    iconClassName?: string | undefined
}


export default function openIconic(outerProps: OpenIconicProps): JSX.Element {
    const props: OpenIconicProps = {
        className: 'w-4 h-4',
        ...outerProps
    }
    console.log(props);
    return (
        <svg className={props.className}>
            <use xlinkHref={`open-iconic.svg#${props.name}`} className={props.iconClassName}></use>
        </svg>
    )
}

enum OpenIconicNames {
    'account-login' = 'account-login',
    'account-logout' = 'account-logout',
    'action-redo' = 'action-redo',
    'action-undo' = 'action-undo',
    'align-center' = 'align-center',
    'align-left' = 'align-left',
    'align-right' = 'align-right',
    'aperture' = 'aperture',
    'arrow-bottom' = 'arrow-bottom',
    'arrow-circle-bottom' = 'arrow-circle-bottom',
    'arrow-circle-left' = 'arrow-circle-left',
    'arrow-circle-right' = 'arrow-circle-right',
    'arrow-circle-top' = 'arrow-circle-top',
    'arrow-left' = 'arrow-left',
    'arrow-right' = 'arrow-right',
    'arrow-thick-bottom' = 'arrow-thick-bottom',
    'arrow-thick-left' = 'arrow-thick-left',
    'arrow-thick-right' = 'arrow-thick-right',
    'arrow-thick-top' = 'arrow-thick-top',
    'arrow-top' = 'arrow-top',
    'audio' = 'audio',
    'audio-spectrum' = 'audio-spectrum',
    'badge' = 'badge',
    'ban' = 'ban',
    'bar-chart' = 'bar-chart',
    'basket' = 'basket',
    'battery-empty' = 'battery-empty',
    'battery-full' = 'battery-full',
    'beaker' = 'beaker',
    'bell' = 'bell',
    'bluetooth' = 'bluetooth',
    'bold' = 'bold',
    'bolt' = 'bolt',
    'book' = 'book',
    'bookmark' = 'bookmark',
    'box' = 'box',
    'briefcase' = 'briefcase',
    'british-pound' = 'british-pound',
    'browser' = 'browser',
    'brush' = 'brush',
    'bug' = 'bug',
    'bullhorn' = 'bullhorn',
    'calculator' = 'calculator',
    'calendar' = 'calendar',
    'camera-slr' = 'camera-slr',
    'caret-bottom' = 'caret-bottom',
    'caret-left' = 'caret-left',
    'caret-right' = 'caret-right',
    'caret-top' = 'caret-top',
    'cart' = 'cart',
    'chat' = 'chat',
    'check' = 'check',
    'chevron-bottom' = 'chevron-bottom',
    'chevron-left' = 'chevron-left',
    'chevron-right' = 'chevron-right',
    'chevron-top' = 'chevron-top',
    'circle-check' = 'circle-check',
    'circle-x' = 'circle-x',
    'clipboard' = 'clipboard',
    'clock' = 'clock',
    'cloud' = 'cloud',
    'cloud-download' = 'cloud-download',
    'cloud-upload' = 'cloud-upload',
    'cloudy' = 'cloudy',
    'code' = 'code',
    'cog' = 'cog',
    'collapse-down' = 'collapse-down',
    'collapse-left' = 'collapse-left',
    'collapse-right' = 'collapse-right',
    'collapse-up' = 'collapse-up',
    'command' = 'command',
    'comment-square' = 'comment-square',
    'compass' = 'compass',
    'contrast' = 'contrast',
    'copywriting' = 'copywriting',
    'credit-card' = 'credit-card',
    'crop' = 'crop',
    'dashboard' = 'dashboard',
    'data-transfer-download' = 'data-transfer-download',
    'data-transfer-upload' = 'data-transfer-upload',
    'delete' = 'delete',
    'dial' = 'dial',
    'document' = 'document',
    'dollar' = 'dollar',
    'double-quote-sans-left' = 'double-quote-sans-left',
    'double-quote-sans-right' = 'double-quote-sans-right',
    'double-quote-serif-left' = 'double-quote-serif-left',
    'double-quote-serif-right' = 'double-quote-serif-right',
    'droplet' = 'droplet',
    'eject' = 'eject',
    'elevator' = 'elevator',
    'ellipses' = 'ellipses',
    'envelope-closed' = 'envelope-closed',
    'envelope-open' = 'envelope-open',
    'euro' = 'euro',
    'excerpt' = 'excerpt',
    'expand-down' = 'expand-down',
    'expand-left' = 'expand-left',
    'expand-right' = 'expand-right',
    'expand-up' = 'expand-up',
    'external-link' = 'external-link',
    'eye' = 'eye',
    'eyedropper' = 'eyedropper',
    'file' = 'file',
    'fire' = 'fire',
    'flag' = 'flag',
    'flash' = 'flash',
    'folder' = 'folder',
    'fork' = 'fork',
    'fullscreen-enter' = 'fullscreen-enter',
    'fullscreen-exit' = 'fullscreen-exit',
    'globe' = 'globe',
    'graph' = 'graph',
    'grid-four-up' = 'grid-four-up',
    'grid-three-up' = 'grid-three-up',
    'grid-two-up' = 'grid-two-up',
    'hard-drive' = 'hard-drive',
    'header' = 'header',
    'headphones' = 'headphones',
    'heart' = 'heart',
    'home' = 'home',
    'image' = 'image',
    'inbox' = 'inbox',
    'infinity' = 'infinity',
    'info' = 'info',
    'italic' = 'italic',
    'justify-center' = 'justify-center',
    'justify-left' = 'justify-left',
    'justify-right' = 'justify-right',
    'key' = 'key',
    'laptop' = 'laptop',
    'layers' = 'layers',
    'lightbulb' = 'lightbulb',
    'link-broken' = 'link-broken',
    'link-intact' = 'link-intact',
    'list' = 'list',
    'list-rich' = 'list-rich',
    'location' = 'location',
    'lock-locked' = 'lock-locked',
    'lock-unlocked' = 'lock-unlocked',
    'loop' = 'loop',
    'loop-circular' = 'loop-circular',
    'loop-square' = 'loop-square',
    'magnifying-glass' = 'magnifying-glass',
    'map' = 'map',
    'map-marker' = 'map-marker',
    'media-pause' = 'media-pause',
    'media-play' = 'media-play',
    'media-record' = 'media-record',
    'media-skip-backward' = 'media-skip-backward',
    'media-skip-forward' = 'media-skip-forward',
    'media-step-backward' = 'media-step-backward',
    'media-step-forward' = 'media-step-forward',
    'media-stop' = 'media-stop',
    'medical-cross' = 'medical-cross',
    'menu' = 'menu',
    'microphone' = 'microphone',
    'minus' = 'minus',
    'monitor' = 'monitor',
    'moon' = 'moon',
    'move' = 'move',
    'musical-note' = 'musical-note',
    'paperclip' = 'paperclip',
    'pencil' = 'pencil',
    'people' = 'people',
    'person' = 'person',
    'phone' = 'phone',
    'pie-chart' = 'pie-chart',
    'pin' = 'pin',
    'play-circle' = 'play-circle',
    'plus' = 'plus',
    'power-standby' = 'power-standby',
    'print' = 'print',
    'project' = 'project',
    'pulse' = 'pulse',
    'puzzle-piece' = 'puzzle-piece',
    'question-mark' = 'question-mark',
    'rain' = 'rain',
    'random' = 'random',
    'reload' = 'reload',
    'resize-both' = 'resize-both',
    'resize-height' = 'resize-height',
    'resize-width' = 'resize-width',
    'rss' = 'rss',
    'rss-alt' = 'rss-alt',
    'script' = 'script',
    'share' = 'share',
    'share-boxed' = 'share-boxed',
    'shield' = 'shield',
    'signal' = 'signal',
    'signpost' = 'signpost',
    'sort-ascending' = 'sort-ascending',
    'sort-descending' = 'sort-descending',
    'spreadsheet' = 'spreadsheet',
    'star' = 'star',
    'sun' = 'sun',
    'tablet' = 'tablet',
    'tag' = 'tag',
    'tags' = 'tags',
    'target' = 'target',
    'task' = 'task',
    'terminal' = 'terminal',
    'text' = 'text',
    'thumb-down' = 'thumb-down',
    'thumb-up' = 'thumb-up',
    'timer' = 'timer',
    'transfer' = 'transfer',
    'trash' = 'trash',
    'underline' = 'underline',
    'vertical-align-bottom' = 'vertical-align-bottom',
    'vertical-align-center' = 'vertical-align-center',
    'vertical-align-top' = 'vertical-align-top',
    'video' = 'video',
    'volume-high' = 'volume-high',
    'volume-low' = 'volume-low',
    'volume-off' = 'volume-off',
    'warning' = 'warning',
    'wifi' = 'wifi',
    'wrench' = 'wrench',
    'x' = 'x',
    'yen' = 'yen',
    'zoom-in' = 'zoom-in',
    'zoom-out' = 'zoom-out'
}