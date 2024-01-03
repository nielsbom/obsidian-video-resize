import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import {
	ViewUpdate,
	PluginValue,
	EditorView,
	ViewPlugin,
} from "@codemirror/view";

export default class VideoResizePlugin extends Plugin {
	async onload() {
		this.registerEditorExtension([EditorExtension]);
	}
}

class VideoResizeEditorExtension implements PluginValue {
	_apply_dom_changes() {

	}

	constructor(view: EditorView) {
		console.log("test 2");
	}

	update(update: ViewUpdate) {
		console.log("test", update);
	}

	destroy() {
		console.log("destroy");
	}
}

const EditorExtension = ViewPlugin.fromClass(VideoResizeEditorExtension);
